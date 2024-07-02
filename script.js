document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    const photoInput = document.getElementById('photo');
    const feedback = document.getElementById('feedback').value;
    const gallery = document.getElementById('gallery');
    const daysCompleted = document.getElementById('daysCompleted');

    if (photoInput.files.length > 0) {
        const file = photoInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = `Day ${day}`;

            const feedbackText = document.createElement('p');
            feedbackText.textContent = `Day ${day}: ${feedback}`;

            galleryItem.appendChild(img);
            galleryItem.appendChild(feedbackText);
            gallery.appendChild(galleryItem);

            // Update the number of completed days
            daysCompleted.textContent = gallery.getElementsByClassName('gallery-item').length;
        };

        reader.readAsDataURL(file);
    }

    photoInput.value = '';
    document.getElementById('feedback').value = '';
});
