console.log("load");
//opdr 1a
const jsonData = `
{
  "firstname": "Judeska",
  "email": "judeska@example.com"
}`;

const objaData = JSON.parse(jsonData);

console.log("voornaam ", objaData.firstname);
console.log("email ", objaData.email);
  //opdr 1b
  const JsonData1=`
  {
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
  }`;
  const objaData1 = JSON.parse(JsonData1);
  console.log("id ", objaData1.id);
console.log("voornaam ", objaData1.firstname);
console.log("achternaam ", objaData1.lastname);
console.log("email ", objaData1.email);
console.log("birthData ", objaData1.birthData);
console.log("phone ", objaData1.phone);
console.log("website ", objaData1.website);
//opdr 2
const jsonData2 = `{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
  }`;
const objaData2 = JSON.parse(jsonData2);
console.log("id ", objaData2.id);
console.log("slug ", objaData2.slug);
console.log("url ", objaData2.url);
console.log("title ", objaData2.titlel);
console.log("content ", objaData2.content);
console.log("image ", objaData2.image);
console.log("thumbnail ", objaData2.thumbnail);
console.log("status ", objaData2.status);
console.log("category ", objaData2.category);
console.log("publishedAt ", objaData2.publishedAt);
console.log("updatedAt ", objaData2.updatedAt);
console.log("userId ", objaData2.userId);
console.log("image ", objaData2.image);
