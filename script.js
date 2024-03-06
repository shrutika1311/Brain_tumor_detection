function processImage() {
    const input = document.getElementById('imageInput');
    const output = document.getElementById('output');

    if (input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                // You can perform further processing or display the image
                output.innerHTML = `<p>Image processed successfully!</p>`;
                output.appendChild(img);
            };
        };

        reader.readAsDataURL(file);
    } else {
        output.innerHTML = `<p>Please select an image first.</p>`;
    }
}
