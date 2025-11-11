// Survey Form JavaScript

// Xử lý submit form
document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    const modal = document.getElementById('thankYouModal');
    
    // Submit form event
    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn form submit mặc định
        
        // Hiển thị modal
        modal.style.display = 'block';
        
        // Optional: Log form data to console
        const formData = new FormData(surveyForm);
        console.log('Form submitted with data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    });
});

// Đóng modal
function closeModal() {
    const modal = document.getElementById('thankYouModal');
    modal.style.display = 'none';
    
    // Reset form khi đóng modal
    document.getElementById('surveyForm').reset();
}

// Đóng modal khi click bên ngoài
window.onclick = function(event) {
    const modal = document.getElementById('thankYouModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Đóng modal bằng phím ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('thankYouModal');
        if (modal.style.display === 'block') {
            closeModal();
        }
    }
});

// Validation tùy chỉnh (optional)
function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (firstName === '' || lastName === '' || email === '') {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
        return false;
    }
    
    return true;
}
