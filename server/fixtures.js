Meteor.methods({
  // Before inserting fixtures zou need to register in orion
  insertFixtures: function () {
    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",tags:["Meta"],text:"<p class=\"fr-tag\">This journal should be a place for me to publish notes on current Pojects and things I learned.</p><h3 class=\"fr-tag\">Naming</h3><p class=\"fr-tag\">Blog is such an ugly word. So I just called my blog \"Journal\".</p><h3 class=\"fr-tag\">Roadmap</h3><p class=\"fr-tag\">This shouldn't really be a site to show of my skills. I want to make it simple, usable, accesible, machine readable and all those beautifull things. Also I have my problem with long term projects. I tend to lose intrest pretty fast.</p><p class=\"fr-tag\">So basically, there is no roadmap. The biggest changes will probalby happen on the frontpage.</p><p class=\"fr-tag\">What is on the way tough is, <strong>tags </strong>and <strong>teasers</strong>.<br></p>",title:"About This Journal",
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",title:"Contributing To Meteor Packages",text:"<p class=\"fr-tag\"><a rel=\"nofollow\" href=\"https://github.com/orionjs/\">orionjs</a> is so far one of my favourite packages. But what it has in functionality, it lacks in styling. So I thought i would try and contribute. There are lots of small things I could do to improve it.<br></p>",tags:["Meteor","Orion"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",title:"Testsdf",text:"<p class=\"fr-tag\">agsdf<br></p>",tags:["test"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",title:"adsf",text:"<p class=\"fr-tag\">afew<br></p>",tags:["test"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",title:"dgrthullo",text:"<p class=\"fr-tag\">il<br></p>",tags:["test"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",tags:["test"],title:"3546zu677",
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",title:"dsdtfmi",text:"<p class=\"fr-tag\">-Ã¼Ã¤<br></p>",tags:["test"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",title:"g5htuziu",text:"<p class=\"fr-tag\">wertz<br></p>",tags:["test"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",
      title:"123255",
      "text":"<p class=\"fr-tag\">442<br></p>",
      tags:["test"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",
      title:"34565rd"
     ,text:"<p class=\"fr-tag\">wadefrgt5<br></p>"
     ,tags:["test"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",title:"456trfewsdfrf",tags:["test"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",title:"53z46rtses",tags:["test"]
    })

    orion.entities.posts.collection.insert({
      "createdBy":"fr9WnJafRoCW72MKe",title:"2s34g5e6h7zbtfd",tags:["test"]
    })
  }
})