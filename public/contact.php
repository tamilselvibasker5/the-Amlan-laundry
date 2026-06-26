<?php
// Redirect GET requests to the homepage
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: https://www.theamlanlaundry.com/");
    exit;
}

// Disable error display to prevent JSON corruption
ini_set('display_errors', 0);
error_reporting(0);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Strict-Transport-Security: max-age=31536000; includeSubDomains; preload');
header("Content-Security-Policy: default-src 'self';");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? strip_tags(trim($_POST['email'])) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $location = isset($_POST['location']) ? strip_tags(trim($_POST['location'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        http_response_code(200);
        echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
        exit;
    }
    
    // Email configuration
    $to = "contact@theamlanlaundry.com";
    $subject = "New Website Inquiry from " . $name;
    
    // Build email message
    $email_message = "You have received a new message from your website contact form.\n\n";
    $email_message .= "Name: " . $name . "\n";
    $email_message .= "Email: " . $email . "\n";
    $email_message .= "Phone: " . $phone . "\n";
    $email_message .= "Location: " . $location . "\n";
    $email_message .= "Message:\n" . $message . "\n";
    
    // Email headers - MUST use your actual Bluehost domain email
    $headers = "From: contact@theamlanlaundry.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
    } else {
        http_response_code(200);
        echo json_encode(['success' => false, 'message' => 'Error sending message. Please try again.']);
    }
} else {
    http_response_code(200);
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>
