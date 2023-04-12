import express from 'express'
import expressLayouts from 'express-ejs-layouts'

const app = express()

app.set('view engine', 'ejs')

app.use(expressLayouts)
app.use(express.static('public'))

const menu = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Note', url: '/note' },
  { name: 'Three', url: '/three' },
]

const notes = [
  { category: 'npm', title: 'express-ejs-layouts', uri: 'https://www.npmjs.com/package/express-ejs-layouts' },
  { category: 'blog', title: '[實例] 使用NodeJs,Express+EJS製作靜態網站', uri: 'https://medium.com/web-design-zone/%E5%AF%A6%E4%BE%8B-%E4%BD%BF%E7%94%A8nodejs-express-ejs%E8%A3%BD%E4%BD%9C%E9%9D%9C%E6%85%8B%E7%B6%B2%E7%AB%99-7f962914934' },
  { category: 'doc', title: 'Bootstrap', uri: 'https://bootstrap5.hexschool.com' },
  { category: 'doc', title: 'Three.js', uri: 'https://threejs.org/' },
  { category: 'book', title: 'Three.js', uri: 'https://discoverthreejs.com/zh/' },
]

app.get('/', function (req, res) {
  res.render('index', { url: req.url, menu })
})

app.get('/about', function (req, res) {
  res.render('about', { url: req.url, menu })
})

app.get('/note', function (req, res) {
  res.render('note', { url: req.url, menu, notes })
})

app.get('/note', function (req, res) {
  res.render('note', { url: req.url, menu, notes })
})

app.get('/three', function (req, res) {
  res.render('three', { url: req.url, menu })
})

app.listen(8000, () => {
  console.log('Running at http://localhost:8000');
})