module.exports = {

    render(req, res, error) {

        res.render('reservations', {
            title: 'Reservas -  Restaurante Saboro',
            background: 'images/img_bg_2.jpg',
            h1: 'Reserve uma Mesa!',
            body: req.body
        });
    },

    save(fields) {

        //MY11 - Efetuando Reserva com Método POST para o MySQL 18:44 / 32:46

        return new Promise((resolve, reject) => {

            conn.query(`
        INSERT INTO tb_reservations(name, email, people, date, time)
        VALUES(?, ?, ?, ?, ?)
        
        `, [
                fields.name,
                fields.email,
                fields.people,
                fields.date,
                fields.time

            ], (err, results) => {



            })


        });



    }
}