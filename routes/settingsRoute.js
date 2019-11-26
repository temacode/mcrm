const path = require('path');
const multer = require('multer');
const filePath = path.join(__dirname, '../')+'public/img/';
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');

var MAGIC_NUMBERS = {
	jpg: 'ffd8ffe0',
	jpg1: 'ffd8ffe1',
	png: '89504e47',
	gif: '47494638'
}

function checkMagicNumbers(magic) {
	if (magic == MAGIC_NUMBERS.jpg || magic == MAGIC_NUMBERS.jpg1 || magic == MAGIC_NUMBERS.png || magic == MAGIC_NUMBERS.gif) return true
}

var storage = multer.diskStorage({
    destination: function (res, file, cb) {
        cb(null, filePath);
    },
    filename: function (res, file, cb) {
        cb(null, file.fieldname+'.'+(file.mimetype.split('/')[1]));
    }

});
var upload = multer({storage: storage});

var storageBuf = multer.memoryStorage();
var uploadBuf = multer({storage: storageBuf});

module.exports = (app) => {
    app.post('/api/settings', uploadBuf.single('userpic'), async (req, res) => {
        const buf = await imagemin.buffer(req.file.buffer);
		var magic = buf.toString('hex', 0, 4);
        if (checkMagicNumbers(magic)) {
            fs.writeFile(filePath+req.file.fieldname+'.'+(req.file.mimetype.split('/')[1]), buf, err => {
                if (err) {
                    console.log(err);
                }
            });
            res.status(201).send('http://localhost:5000/img/userpic.png');
            res.end();
		} else {
            res.status(415).send('Недопустимый формат изображения!');
		}
    });
    app.get('/api/settings', async (req, res) => {
        res.send('Hello world');
    });
}