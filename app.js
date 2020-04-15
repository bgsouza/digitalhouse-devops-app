
/* configs */
const dotenv = require('dotenv');
const fs = require('fs')
const AWS = require('aws-sdk')
var bodyParser = require('body-parser')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

dotenv.config();

/* Setup AWS */
console.log('process.env.AWS_ACCESS_KEY', process.env.AWS_ACCESS_KEY)
console.log('process.env.AWS_SECRET_ACCESS_KEY', process.env.AWS_SECRET_ACCESS_KEY)
console.log('process.env.REGION', process.env.REGION)

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.REGION,
    // s3BucketEndpoint: true,
    endpoint: `https://s3.amazonaws.com`
})
//https://app-digital.s3-sa-east-1.amazonaws.com
const s3 = new AWS.S3({});

/* Setup App */
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));
app.listen(port);


/* Rotas */
app.post('/file-upload', upload.single('imageUpload'), (req, res) => {

    const file = (req.file.originalname);
    console.log('File', req.file)
    
    const params = {
        Bucket: process.env.BUCKET_NAME, // pass your bucket name
        // ACL: 'public-read',
        Key: `${file}`,
        Body: fs.readFileSync(req.file.path)
    };
    s3.putObject(params, function(s3Err, data) {
        if (s3Err) { 
            console.log('error', s3Err)
            throw s3Err
        }
        console.log(`File uploaded successfully at ${data.Location}`)
        res.redirect("/?uploadOk=true");
    });
})

app.get('/api/v1/healthcheck', function(req, res) {
    res.send({
        "status": {
            "app": true,
            "versao": process.env.VERSION,
            "ambiente": process.env.NODE_ENV
        }
    });
});