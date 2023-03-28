class grid {

    constructor(configs) {

        configs.listeners = Object.assign({

            afterUpdateClick: (e) => {

                $('#modal-update').modal('show')

            },
            afterDeleteClick: (e) => {

                window.location.reload();
            }



        }, configs.listeners)

        this.options = Object.assign({}, {

            formCreate: '#modal-create form',
            formUpdate: '#modal-update form',
            btnUpdate: '.btn-update',
            btnDelete: '.btn-delete',
            onUpdateload: (form, name, data) => {

              let input =  form.querySelector('[name=' + name +']');
             if (input) input.value = data[name];

            }

        }, configs);

        this.initForms();
        this.initButtons();

    }

    initForms() {

        this.formCreate = document.querySelector(this.options.formCreate);

        this.formCreate.save().then(json => {

            window.location.reload();

        }).catch(err => {

            console.log(err)

        });

        this.formUpdate = document.querySelector(this.options.formUpdate);

        this.formUpdate.save().then(json => {

            window.location.reload();

        }).catch(err => {

            console.log(err)

        });


    }

    fireEvent(name, args) {

        if (typeof this.options.listeners[name] === 'function') {
            this.options.listeners[name].apply(this, args);
        }

    }

    

    initButtons() {


        [...document.querySelectorAll(this.options.btnUpdate)].forEach(btn => {

            btn.addEventListener('click', e => {

                let tr = btn.parentNode.parentNode;

                let data = JSON.parse(tr.dataset.row)

                for (let name in data) {

                    this.options.onUpdateload(this.formUpdate , name , data); 

                }

                this.fireEvent('afterUpdateClick', [e]);
            })

        });


        [...document.querySelectorAll(this.options.btnDelete)].forEach(btn => {

            btn.addEventListener('click', e => {

                this.fireEvent('beforeDeleteClick', [e]);

                let tr = btn.parentNode.parentNode;

                let data = JSON.parse(tr.dataset.row);

                if (confirm(eval('`' + this.options.deleteMsg + '`'))) {

                    fetch(eval('`' + this.options.deleteUrl + '`'), {
                        method: 'DELETE'
                    }).then(response => response.json())
                        .then(json => {

                            this.fireEvent('afterDeleteClick', [e]);


                        })

                }


            });

        });


    }

}