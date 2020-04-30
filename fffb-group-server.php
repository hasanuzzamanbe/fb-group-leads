<?php
/*
Plugin Name: FF Facebook Group Server
Plugin URI:  https://wordpress.org/plugins/fluentform
Description: Divi Module For Fluent Forms
Version:     1.0.0
Author:      WPManageNinja LLC
Author URI:  https://wpmanageninja.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: ffdi-ff-divi
Domain Path: /languages
*/

/*
 * https:/domain.com/?fb_capture=1&form_id=1
 */
class FfFacebookGroupServer
{
    public function __construct()
    {
        $this->registerServerEndpoint();
    }

    public function registerServerEndpoint()
    {
        if(isset($_REQUEST['fb_capture'])) {
            $formId = intval($_REQUEST['form_id']);

            $form = wpFluent()->table('fluentform_forms')
                        ->find($formId);

            if(!$form) {
                wp_send_json([
                    'error' => 'No Form Found'
                ], 423);
            }

            $answers = wp_unslash($_REQUEST['answers']);
            $questions = wp_unslash($_REQUEST['questions']);
            $user = wp_unslash($_REQUEST['user']);

            $formData = [];

            if($questions) {
                foreach ($questions as $index => $question) {
                    $questionSlug = substr($question, 0, 20);
                    $questionSlug = str_replace(' ', '_', $questionSlug);
                    $questionSlug = strtolower($questionSlug);
                    $questionSlug = preg_replace('/[^a-zA-Z0-9_]/', '', $questionSlug);
                    $formData[$questionSlug] = $answers[$index];
                }
            }

            $formData['user_name'] = isset($user['name']) ? $user['name'] : '';
            $formData['user_url'] = isset($user['url']) ? $user['url'] : '';
            $formData['user_other_info'] = isset($user['other_info']) ? $user['other_info'] : '';


            $previousItem = wpFluent()->table('fluentform_submissions')
                ->where('form_id', $formId)
                ->orderBy('id', 'DESC')
                ->first();

            $serialNumber = 1;

            if ($previousItem) {
                $serialNumber = $previousItem->serial_number + 1;
            }

            $insertId =wpFluent()->table('fluentform_submissions')->insert([
                'form_id' => $formId,
                'response' => json_encode($formData),
                'source_url' => isset($_REQUEST['src']) ? $_REQUEST['src'] : '',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'serial_number' => $serialNumber
            ]);

            $formHandler = new \FluentForm\App\Modules\Form\FormHandler(wpFluentForm());
            $result = $formHandler->processFormSubmissionData($insertId, $formData, $form);

            wp_send_json([
                'insert_id' => $insertId,
                'result' => $result
            ], 200);
        }
    }
}

add_action('init', function () {
    new FfFacebookGroupServer();
});
