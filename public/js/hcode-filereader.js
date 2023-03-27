class HcodeFileReader {

    constructor(inputEl, imgEl) {

        this.inputEl = inputEl;
        this.imgEl = imgEl;


        this.initInputEvents();

    }

    initInputEvents() {

        document.querySelector(this.inputEl).addEventListener("change", e => {

            this.reader(e.target.files[0]).then(result => {

                document.querySelector(this.imgEl).src = result;

            });

        });

    }

    reader(file) {

        return new Promise((resolve, rejecct) => {

            let reader = new FileReader();

            reader.onload = function () {

                resolve(reader.result);

            }

            reader.onerror = function() {

                rejecct("Não foi possível ler a imagem");

            }

            reader.readAsDataURL(file);

        })



    }
}