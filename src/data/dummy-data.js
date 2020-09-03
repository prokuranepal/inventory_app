import Category from "../models/category";
import Item from "../models/item";
import Type from "../models/type";
import Contact from '../models/contact';

export const CATEGORIES = [

  new Category('c1', 'Inventory', '#FFFFFF', 'ios-archive'),

  new Category('c2', 'Send/Req', '#FFFFFF', 'ios-send'),

  new Category('c3', 'Add Item', '#FFFFFF', 'ios-add-circle-outline'),

  new Category('c4', 'Manage', '#FFFFFF', 'ios-build'),

  new Category('c5', 'Attention', '#FFFFFF', 'ios-warning'),

  new Category('c6', 'Logs', '#FFFFFF', 'ios-paper'),


];



export const type = [
  new Type("t1", "Pain killer", "#FFFFFF", "drug-pack"),
  new Type("t1", "Vitamin", "#FFFFFF", "drug-pack"),
  new Type("t1", "Antibiotic", "#FFFFFF", "drug-pack"),
  new Type("t1", "General", "#FFFFFF", "drug-pack")
];




export const ITEMS = [

  new Item(
    'i1',
    'Paracetamol',
    10,
    'BGuyz',
    'https://s.rfi.fr/media/display/7ff0e7e2-0fa1-11ea-b16a-005056a99247/w:1240/p:16x9/800px-Paracetamol_acetaminophen_500_mg_pills.webp',
    20,
    'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    "Pain killer",
    "2019/12/20",
    "5ebd77a15af0612e10497f60",
    "2019/12/20",
    "100mg",
    "2019/12/16",
    "5f2baf308010215de418daa9",
  ),



  new Item(
    'i2',
    'Electrobion',
    10,
    'BGuyz',
    'https://res.sastasundar.com/incom/images/product/ElectrobionNewOrange-Flavour-1569231534-10044174-1.jpg',
    10,
    'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    "Vitamin",
    "2019/12/20",
    "5ebd77a15af0612e10497f60",
    "2019/12/20",
    "100mg",
    "2019/12/16",
    "5f2baf308010215de418daa9",
  ),



  new Item(
    'i3',
    'Antibiotics',
    20,
    'BGuyz',
    'https://images.theconversation.com/files/313959/original/file-20200206-43084-f2m67.jpg?ixlib=rb-1.1.0&rect=0%2C23%2C5184%2C3370&q=45&auto=format&w=926&fit=clip',
    45,
    'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    'Antibiotic',
    "2019/12/20",
    "5ebd77a15af0612e10497f60",
    "2019/12/20",
    "100mg",
    "2019/12/16",
    "5f2baf308010215de418daa9",
  ),



  new Item(
    'i4',
    'Antacids',
    40,
    'Nepal Gov',
    'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00036800044197/f99f5b6503ac5f017e8a00108ebcfa7f_large.png&width=512&type=webp&quality=40',
    60,
    'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    'Antibiotic',
    "2019/12/20",
    "5ebd77a15af0612e10497f60",
    "2019/12/20",
    "100mg",
    "2019/12/16",
    "5f2baf308010215de418daa9",
  ),



  new Item(
    'i5',
    'Digene',
    30,
    'BGuyz',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhUTEhIVFRIWGB0XFRUXFRUZFRYVFxgWGBUXExoZHiggGBsmGxYZITEhJykrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGzIlHyYvLy8wLy0rLy0tLS8tLS8tKzErLy0tLS0tLzItLS0wLTAtLS0tLS0tLS0tLS0tLS0vLf/AABEIAOgA2QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABCEAABAwIEBAMFBQYFAgcAAAABAAIRAyEEEjFBBSJRYQZxgRMyQpGhFDNSsdEHI2KSwfBygtLh8cLTFRYXU4OTov/EABoBAQACAwEAAAAAAAAAAAAAAAACAwEEBQb/xAAuEQACAgECBQAKAgMAAAAAAAAAAQIDEQQhBRIxQVETImFxgZGhwdHwMrEUI/H/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiIgI9esQYA2nUKI7GPmLRP4m/iA/Iz6KVitRY6bBYXm3un+/JARvt9bZo067w+NO4aPVenY2sNGD6/w9+7vkoeIoNn7lx8h+rwq7FMZvh6voaf/eQF2ziFbenHz7/7fNTMBi3VPebBhaxgmMm1Oozu5zI+jytl4eZc+0HlEdRBh3rceiAnIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgImJcM3x9LNJB3vA7rBWqsAk5/RriflC+8QY5hzNynM4BwdJgQG8sHsLdyo9YOGuT+R3+tZwMkSpi6PXEDypP/o1Y3BjhIq4kb+5H0IlfMRQm/L9R/wBRWNlAn4vq39FnlZjmR7oZQfvq7uzmmPornhlRpc4AkzDrtIj4YuBuCqo8NIjn+gVnwZrnD2j4GrGgSbAwSSdyRosYM5LNERYAREQBERAEREAREQBERAEREAREQBERAEREARFqnF+PPrONDCHtUr7NG4pnc/xfLqLK63N4RXbbGtZf/T74v4k18YakSaudrnlp+7DSHXPWYt09JrMfiamQND3NcNCCb+d1nw/D2UGw25N3OOpPUqK+mXOXQrjBJJdEcu2yzLb6vt4K6phcdUHJiqjf8z/6FRjwniTRJxtU/wDyVf8AUtxwNGAp76II0R6pxeEl8kWQpbWcnPsFiMSx49rVqOAP43me1ytx8F8TaGfZqhisHPc2T77XOc/lJ1Ik21gecUPG8LlMhQ2BtZuVxhwu1wMOaRoQVdZCNsDXjdOuw6oi1HgHiYtcKGLIDtKdb4X9A/8AC7vv+e3Lk2VSreGdiq2NizEIiKssCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDUPE/EKlVxosJbSFnkav6js38/LXHw9mRsNbAVl9mB2UsUAAtz0qUFFI0XTKU3JsosQ87rBSqgagq3qYcEr4MIOimrY4KpUTznJhoY+kNS4f5VIPFqP4nfyOXz7GOi+/Yx0UG635LErV4/fiVHFcXSqDlDz/lha79neDIBW8fY29An2RvRX16mMFhI17NJOby2a5SwHtm5XfIhW/h7H1sPUbh68upm1N51admk7tOg3BtppYUsOBssnEKILWncEEKqd6n6rW39F9WmcHzJ7/wBl2iItE6AREQBERAEREAREQBERAEREAREQBERAVFNqlOFlVYmq4OytJDsoiJgk1GC50+HToT3UupU5S4PIlogk2GYkTe1hf0VvK8JlTmstHh+q9NUOrWLhUeHEBreUDLH3YfJkTMu6/CO6zU3OzTmJBeWZSBAADiC20zy7ncrPK8GOZZJIC+wsPtv3mWRERltOaM89YyrDSqucyC4hwYSSA25GRzTcRdrh8ynKw5xRLIXgrDUc4ENzOuG80NzCRVc6IETDANFiOJ5mAP1BBzABxJzAEiAZBYQYG6crHOiZTX3iQ5B5hQW1eRsl9pzXGeWgkibA9e4G4N5mKnLedes/E7RRkmiUZJ7FwiIqywIiIAiIgCIiAIiIAiIgCIiAIiIAiIgKam0E3A1B9QZCm+yaAIERp2gED8z81BwpJ3n0hZ+LYo0aFSqGh3s2OflLsshozETBgwDsppNvCMbdSFUwjJOsEQQHOg2y3E6xb0HQLNSw4zZrkySATYE6kDr+pVQzjbhUosr0hTGI+5eyoajS/Jn9nUljCx5ExqDBuDZWuFx1J7qjGul1IxUEOGQkSMxIA0v5EHRTkprr+9iKjHwSm4dvrOad5/4t5L4MI0Xv7ns9fhH9e6xYLilGrlyOJDxLHZHhjwBM03EBrxF7EyL6Ly3jOHJIFS4eKR5KkCqSAGOOWGulzRBPxDqsYn0wxiJkrYdp1na4MEZSSCPmVHdhmgRfUGZMyDm187+pXscToufUpB81KQDqjMrswaZggRLgYsRP1UOrxijNMDOXVWGpTDaVUlzG5cxENtGdtjfmFrolPpuZ5YmdmGaRlIJEzcmSe5md48raKXjaYDQQLk/1J/MqLgK4qNDwCGuu2d2/C4diII7FTcf7o8woyb6MykuxZIiKBkIiIAiIgCIiAIiIAiIgCIiAIiIAiIgKbDgyZ+i8+J6Tn4PEsY0ue+jUYxrRcuexzWj5kX2XoPyyTsCfldZ/trMsztJ3i0/2VZHKakkRk0tmajj8O/FVMDTbSqNbh6jK9V72OYGmlTc1tNuYDO4ud8MgAG+ixYzA1qzOMU6bHh9aBSLmPa2pGGpUyGOcAHAua5sg/QgraauJYDc7TEHSJ/vzHULNRxDCQAQSdh5EielgVcrpR3S/c5I5j0yVuD4v7Wrh2UqU03Mc6pmpvD8MWNaAx4NmOdnLQDBGV2oNoHCSWVcS9xq5TjHObSFIltUGlSYx4OWYD75icoyTtI2ili2EA52wRIkgWidDpYysnt2QDmbBMAyIJ6So+kxlKPs+uRhPfJqXGMC+pVrYjDg/asPUmmCHNbXpmjSFWgSRDmuLCAROV7R0KjY7Cuc7BAis0DCVWPdTp1HZDUZhg1rsrTcljra8uy26pi6ducX0vO0/ksD8SzLmzCDv3iYPQ20WVbLbbp+MfljMfJ8wlQvDXFpaSAS06tm+U9xopOO90eahNxjBeTA3g7gn+n9NVMxTw5gI0lUuLXYkpJ9GWaIigSCIiAIiIAiIgCIiAIiIAiIgCIiAIiICnom6nOYCNB8lU4erdWuayyGiFVpNJu0fIdI/IfRe6NBo0AG30j8l5ebrJTKzlmOVeDI3DMty6dz1J/qfmeq+uwlMgAtsNBJ39brIwr1Kcz8mOWPgivwjNcsnuXG4EAmTcx16nqVgdhWARlBuTfqdf0WSrxGkHZPaNzzGUXMnQGNF9qFYjZzdH9Qox7Ijsw7J90azpvGW/W1rqTjTyjzUdr7pj6vKPMLLyySj4LtERRAREQBERAEREAREQBERAEREAREQBERAabQxPMr1tSy0Whi+cXW1Uq9lbKJtWVYMhxDS6AQT0mfmpLHwJOnVVWIaS+WkBzRJkSL2bbY66RNlNpY4w4EAECTzDQixjUD9Co4NXJLOMY1peXDKNwQfTz7LWeMcefUlo5aZgRYF0yIJnckWHbqo2PxYl2gkySABJNp67bqmqVr5jMam4EiwiSRaZOmjTecoXE1WqdknGL9X+zVstzsi44N99TJOp9fMjva8mRBW11qi0fA45jarTIEE2aDoeggXOv8AwZvKnG6ThZ4k7Gx+uiv4dOKTTeHkt07j0bJ5rXWPiteGN/xBVpxYnVY+NYnkZ/iC66idGFW6OgoiKk0wiIgCIiAIiIAiIgCIiAIiIAiKFxbidPDMzVHBuY5WTPM+CQ36LEpKKyzDeCZO26+rVfAmNqV21KlRxLnZZnbLmYdLatJgdVtSrpsVkFNdzEZcyycRZiuYXW24fG8vouetfcLYsLVi9pNyYAJgRcjX1XSccno7Kcm28NeHVWkSc7HTPvDK9kB3lnIWfi/7qg2NYA+mkql8LcZa6KT59o2Y1JcwkBhadxJAINxbUXFh4iqGrTYabhAc2TfYiQ60t7jULn6tSVcseDgaiqVeU0a9iKhB6gX/AIiTYBnQ7+oVdinxYA5tSfwzOkixkanoT2M/G0QJio0OkxLC6OpiRLtRrod1XVaFOZdVcW6mAGtLjYkxLm2EbQB5rzsWjlswsxOTW07c3Md+s9O8dBCpuM45zcwsCNQS2wiI7fTdWVZrBOSADu0ukiwFycwEbAkW9FAOFLnXqPy9CRt07en0C2Ko808JZZmuLsmoxWWyV4Rzw6q9zrmGtk5YGro3vaexWycYxMtp/wCJv5qko1AIA0AgeQUjiFWRT/xt/NenqpVcFE9dRpFTWo+DtiIsGJxbKcZ3ATJ9BqfK4Wo5KKyzhGdRcbxGlRgVHhpdoNzGp8u+i1vivilxB9gIGV0OPvF1hy7NiQZMi/aDrBa57873FxaDnDpghty3cggGDOp8r827iMY7V7+3sUTuS6HQP/MOH5uYyNspk72GsRGvVZsLxjD1LNqNnoTBk3i+8bLnZsGBxFnOJOxIiRMXkk28vR7RxcQ0EmzWg++4ghp0trJ87GJCojxKzO6WCCvZ1NFjw7MrWjoAPkFkXZRtBERZAREQBEVPxPxJh6BqMLwazGl3s7iTlzBodESRFu6hOyMFmTwYbS6lwtC/adiCTSpWy++bXzzyEHpyuBH8QXqr49c5jHMpZXB37xjjILYnldY9dumqo/EGPdi4qOA1LQAdA1zi31gkE7x2XI12vqlU4we+xRZYpRwjaP2fYkFjmdsw/mcHfWFt65d4O4i6i8Ey4B2Ugalj4g+eYg+hXUVs8MtU6eXuv1E6XmJ+dKLtFfM93z/vRa9hzor6keVehR7ForKtIl4cC5rgZDg6HNdsWkXB7gq3PG8WWloxFQkiBmbScRpoXsJ07/moJ1Ks8DQLrhpPkP0RwT6kbK4P+ST95U1qztHVPZ1Be5hjo+JrogGNvPUL2ym90DM0mYzAs1td1wZi8j9FtDMI6LsP8p/ReH8NO1JwOtmHm6Nd2XG1XDVGLnX8vwee1fC4Yc638PwVlHhlJlyxtR0OtkaQY0ytvmzFpGp912hEKyoFogjIGiczmgA2JzQPiaMxFtcoO8jz7FzLZCCCcodDS4taSIaRmLTlAiY93XVSKRAOZrmggXMGHACC6RpEwdiI7FcHL7nGWx8q4am4tzUxJkHQE290R8RcbeQuq3jHCXtLCwZmB4P8QAIJnrE7eqvGs5coY7KMsgXAaNBfmloNrXyxZxWekS03+EQY1abZi6/KdfMAXMlbVGtuoezyvDN7T622l9crwzdeK49uHpOquBIbFhuSQB9SFoWJ4g+vVfUqBoHLYGQGtBBaJtml4MDXSJXrxPxurkY15/db2u5zYcA4ny2j3SbrWq3EzGUGBJmOgOa/aZ+ijq9U75JR/j9zVtty8F6WuAkjnAls6BxJaG95Nz1glea7A2mZ62MEkgQ4kO3BLQb/AIuphQ8BiiW5XNkg2JMATmbD+0lx1UjEPOpII9oJudASBFtJB8jHposrzsfKlXmcS4gggbkAuLXEwbTMydJIVr4O4e6pXa9zSwUWgmSJc5ws21wBex0JP4lT4DC1azxTbDnOkui0ZsvM7UFsiZC6jgsIyiwMY0NA2HXcre0Onds+Z9EWUw5nlmdERd83AiIgC+Ewvq1bxHjDW/ds9wakC5cDt2utfU6hUVubWfZ5IylhGv8AiPxTUrF9OmS2iRlcxzQKjXA3IINrjfvZa1WbUeOZxeYiTqRHW9rwFd1cBVA0M7GwOtrE21+gUc4J8EBskawRbXuvJW6i22WZZNGXNJ7ldAdoe87EyZjbUa/mvtTEHKyIgEh3u+8f9gFkxeEqMGctBEw4SZa1t9IAAgdbL1jHU6DIIDyQCZNpgabD0WOXC37mEj3gS3mAOo+UXH6ra6vjWnhMDRqOAe+zCzMWuDGuLHVIddwGUSdJOq0/h3ig1aT6NOkwZYcGtaM7gJmD8Rk+cBYeO8DfW4dRr0ajMRVoue6qG1HPdSpPg5GtsQGwCWkSC50Lq8PjOuUuXx9fuWxbSfL4KzhADgMzG/LcGB6R/cyrFzcumm3l3Wv8D4k3S86z62V9iBDheGwSbSZgafpKu0fEJ6fUtXN8r+OPabvD+Iyqs/2ybi+vfHtIhN1bUHMdlJYx9gOZzmuZlBB9nAIIdMmd57FUPtbnzVjhKq9YmppNdD120oqUXsyzGEi7afwuEfaTqcmQ8ztoft8Xy+1sFTLpyPA3nEiJObQBxP4QL9TFspmYHiNNjAHUmuMm5y7kR8O0HWflZY8fj6b2w2k1h1JBn5SLeQTcr9JbzYx8cv8AJCBbSJyABkGGFznkk5bkkQ0AhxsZMjbTPheKU/iIpuuMwBy3k6TvA16bRJqcZiQ0EuMAf3bqtPxXF31CYJyzyiLgXubxMb91yuJVU8vT1n37/E5HF/QRjuvXffv733OvUwIF2xo058zRuA20Tpv1hK+LDYzRlG7uUjqGiAREaC1iuW4bjFamIFRw/wA2logCDGug6rOeNOiHS6bay+b6fSy866Jnm+Zm4eK2VfZ55kMJcCJNyIGYC5mYn9VQYTB1nsJ9kAWzJmA65PJ0FrA9hYwr7g3iKniKJL3ZCwhrmS4m0kEACbw3yupeIpGo0uYMoBBcDAzAc4tcCMwHTQaAFUZcPVZiSyyuoYUNFOCTeXZQ69qctbYgmDefoIWQOc4Fri05nBzr8o5uYkmIaeUtOxH80GpUOsgZQBJGYtyBgcYNwRmadTLSsbMQJJ2Bu0NDQQIZYzBkySDr5qWH1IZN98I4vC0A51V7WVDpcezDbfdkfMnaYtELaKXGsM9wa2q0yCQRdsC55tB81ySoGkj4RMgwSS3dsO0Iv/wQp9FpMsa2deb4yNu2YERAgahb9GrlXBRSRsQucVjB1qnUDhLSCDoQZC9LnXCcf9nfma4HqC0ssYBJ3MEb6ST57vwniTcQ0uaIgwdxOtjuulRqo27dGbELFInIiLaLAtQ43wLENl9F7XD8DpBN5ImCPyW3ry90bKm6iFscSIyipdTkVfitRjsldrmuDgIcMsi2l7zoDcLNhuNNLQPLS8eg0tddD4hUp5XF1ORFwGySOkb+S0bG8RwbPu8GAT+OkANbyxokrj28PjXLPP8AM15V8vcgY3iYY2Q2c0gCRIOmY3lwmw6wfXXcQ/2rctQZuka67euysalJ9R5/d1D5U3kbwBII2i3l0Ww8D8LvzB1Rpa3effN/dieWwVK09lklyorUW2ck8RU6eGqBlEvzFrXPzQHNkGQ0t2m07jzXnhPGMRhqorUXRUGvRwOrXDcHp+i6h+1TwdWxTKVXD+1eaQFMYdsGm1lyXtBMh2gOswNIXOsLgckCoC2ofdYRDiNLA+t10LV6L3mLIcrJ2PrNxDhUp0nUj8QzSSdYBA0BV3wgVHNc2DGxJuDpvqomDDJAJaIE66xEz9fqrrD4tklzYyixFhHTzXI1M5WPdEOryyPjcEXWENDdM39D0UbD0SNXMHm8D81fVAx4doSPeE3v+Xn3W8eFKdOth2l1NhynIDlHutAA+ll1eDaucE6pbrqvudjQcRsoi68ZXb2HOqbD+Jn/ANjP1Xiq09W+j2k+cArr/wD4XQ/9pn8oWj/tCr06bm0qeVhaC52VrZzEEMAMg5pIjznZdq/WuFbaW/Y3beMSUHiO/vOfY/CGoQD3B5HE5pPIbRaxOo1vZRWcKADSegeS4ACAANIvABsNZsVeMYA0NcQ0EkZeVoGU3Ev3JflNoIDtblZXVct5Ln2JmA0OjKA+2uYzr0MzM+clZLOWzzcpOTbk9yhPDoaJjLe83N5BIbOvQE6zppT4zlkU5E2LviIPTXKOw9SVtmLw5eWyZ5SZOsSL9NjYaxvqoj+EmCTyi8F1gBrJ2CirkupHmKLgdeox7HNibNIIJDgZIJG4EOHWCt7wviam+mS8Q4BjHjaoXNJJF5s0DynsJozwdrMM/ENqNinUFPKJLg4gZj0tmb6gja9fwevUIMOIvmyyJvqBbNoOujAl1amuZon0N5bSpYufZPBfTN3wCTI5cw3BAPTQx0VJD2PLHAEmJBPK+LEsJEEHK3WLg3EqRguJ1aZz5nFsRlJLgQAMxAkgd+2l5m04gKNelIItfLLQQ92kEi95HcSFqJcuxF4ZgoVJojLJAJEE6tLWw10+9HMPQ72UnIYALSIJG0t1Dmz0JMxO3ZQ8KSA0OdcA6EZszgSyNZBIB0tr5TqJIyEkFo1BtcMaXhwIOYm2vQ9ZUllBEui8j4RuSZIMxDr7F1tdbnurjw9iXMqsaCD7QRGY+6BM5ctiAN1Q0g7M2nDvanSJIzZnCoRHYagHY7rdeA8GNCXPIc89LxYA8xEk27Dst3RwnKaa7dS+tNvYuURF3TbCIiAQvmUdF9RAecg6L57NvQL2iA85AoXE+F0sS0sq02vaeov6EXHoVPRYaT2YNSxXgPBvLT7ENyjKAx72iD+KDzHuVTO/ZqW/dYmoDmBJc1rrA2Ay5fqujIqp6eqXWJB1xfY5z/6f1/al3txlgZbGRrmkaRMea3Pg3DThqYph03knqTrA2HZWaLFWmrqeYoRrjHdHwLlf7Qq5GKfIJDQyxnLljN6S5rACIuSuqrU/Hnhx+Lph1IA1G2y2Be0kSJkaWIk2hY1NbnDCI2xco7HM2YrlAZYkyXavsakOfAu8+0N52ncFWGDwBfFjBzHlJFxJIDja5d326GNi8Pfs+ezmru5iLtB0JsRI1tA9FumF4NSYNJWhHQzm/WeF+/v2KI0N/wAjjfifEYjDODaVNpLhOeC64JlrWRAi0esg2VFRwOLxpfl9pUMZsjc2QZYsGgkNu0a3JHVfotuBpC/s2T1yhZaVJrBDWhoGgAAA8gFsrQxj/F/Tf5lnoF2ZQYbglCjgm4R1H917MNeGwSTEudOubNeet1olDweaDyab2PptAjOIc4XsRBEietweoXXIWGthKb/eaD33+avt08LFhlkq4yON1aRpcwIL6ejTlBa/kAa28RvlO7Zm4KUqDS0AOIe8BrgQds8uc03BDqbLSPe6ldWxPh/D1BlLTHn67ylDw9h2e6yPVaH+BPyin/Hfk5nhmvcDSc1rqgLS6HWMUyG5SYiGln8vmrzgnBatch2VzaWaWlxuGmYMEySLb7lbtT4PQbJySTrJJmNOymsaAIAAHQKyHD98zfyJRo8sr+FcFpYclzcxeRBc43i1v/yFZIi6EIRgsRWEXpJbIIiKRkIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgP/Z',
    15,
    'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    'General',
    "2019/12/20",
    "5ebd77a15af0612e10497f60",
    "2019/12/20",
    "100mg",
    "2019/12/16",
    "5f2baf308010215de418daa9",
  ),



  new Item(
    'i6',
    'Neurobion',
    10,
    'hard',
    'https://24seven.com.np/images/products/original/1581325358.png',
    240,
    'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    'Vitamin',
    "2019/12/20",
    "5ebd77a15af0612e10497f60",
    "2019/12/20",
    "100mg",
    "2019/12/16",
    "5f2baf308010215de418daa9",
  ),



  // new Item(
  //   'i7',
  //   'Sancho',
  //   50,
  //   'BGuyz',
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz6jTvIuneA-pGMqDJTwT9IZnoFbFfSJUJSpUPoNun6Xw6eC3n&usqp=CAU',
  //   20,
  //   'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
  //   'General'
  // ),



  // new Item(
  //   'i8',
  //   'Sinex',
  //   15,
  //   'Nepal Gov',
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyflBSokJMilCOMmemFIKuYz-tBgeJqmUBvAXxvTt99bEhu7b8&usqp=CAU',
  //   35,
  //   'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
  //   "Pain killer"
  // ),

  // new Item(
  //   'i9',
  //   'Masks',
  //   5,
  //   'BGuyz',
  //   'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/surgical_mask_still_life-1296x728-header2.jpg?w=1155&h=1528',
  //   30,
  //   'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
  //   'General'
  // )
];


export const CONTACTS = [
  new Contact("t1", "Supplier1", 333333, "Kathmandu"),
  new Contact("t2", "Supplier2", 55555, "kupondole"),
  new Contact("t3", "Supplier3", 66666, "jhapa"),
  new Contact("t4", "Supplier4", 7777, "dharan")
];