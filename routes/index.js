const express = require('express');
const router = express.Router();
const classInfo = require('../models/survey');


router.get('/', async (req, res, next) => {
  const topicList = await classInfo.getAll();
  console.log(topicList);
  const rankingList = await classInfo.getRanks();
  //console.log(rankingList);
  res.render('template', {

    locals: {
      title: 'Class Survey 2020',
      topicArray: topicList,
      rankingList: rankingList
    },
    partials: {
      partial: 'partial-index'
    }
    
   });
});

// router.post('/', async (req, res, next) => {

//   const answers = classInfo.updateDb()
// });

module.exports = router;
