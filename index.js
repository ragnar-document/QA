const PAGE = {
    data:{
        questions: questions,
        index: 0,
        answer: null, 
        sum: [], //答案储存 
        grade: 100, //总分数
        questionsTotal: 0
    },
    init: function () {
        this.bind();
        this.render();
    },
    bind: function () {
        let questionBody = document.getElementById('questionBody');
        let next = document.getElementById('next');
        next.addEventListener('click', this.nextQuestions);
        this.onEventListen(questionBody, 'click', 'question', this.clickQuestion);
        let reload = document.getElementById('reload');
        reload.addEventListener('click', () => { location.reload()})
    },
    onEventListen:function(parentNode,action,childClassName,callback) {
        parentNode.addEventListener(action, function (e) {
            e.target.className.indexOf(childClassName) >= 0 && callback(e);
        })
    },
    clickQuestion: function (e) {
        let id = e.target.dataset.index;
        let answer_id = PAGE.data.answer;
        let questionItem = document.getElementsByClassName('question')[id];

        if (id == answer_id) {
            questionItem.classList.add('green');
            PAGE.data.sum.push(1)
            setTimeout(() => {
                PAGE.data.index++
                PAGE.register()
                PAGE.render()
            }, 500);
        } else {
            questionItem.classList.add('red');
            PAGE.data.sum.push(2)
            setTimeout(() => {
                PAGE.data.index++
                PAGE.register()
                PAGE.render()
            }, 500);
        }
    },
    render: function () {
        let questions = PAGE.data.questions;
        let questionsTitle = document.getElementById('title');
        let questionsQuestion = document.getElementById('question');
        let index = PAGE.data.index;
        let title = questions[index].title;
        let options = questions[index].options;
 
        let tit = `<div class="title">第${index+1}题:${title}</div>`
        let opt = options.map((data,index) => {
            return `<div class="question" data-index="${index}">${data}</div>`
        }).join('')
        questionsTitle.innerHTML = tit;
        questionsQuestion.innerHTML = opt
        PAGE.data.answer = questions[index].correct;
        PAGE.data.questionsTotal = questions.length;
    },
    register: function () {
        let truequestion = document.getElementById('truequestion');
        let falsequestion = document.getElementById('falsequestion');
        let gradeStore = document.getElementById('grade');
        const SUM = PAGE.data.sum;
        let i = SUM.length;
        let one = [];
        let two = [];
        for (i; i >= 0; i--) {
            if (SUM[i] == '') {
                two.push(SUM[i])
            } else if (SUM[i] == 2) {
                two.push(SUM[i])
            } else if (SUM[i] == 1) {
                one.push(SUM[i])
            }
        }
        truequestion.innerText = one.length;
        falsequestion.innerText = two.length;
        let hideContainer = document.getElementById('hide');
        let showContainer = document.getElementById('show');
        let tables = document.getElementById('tables');

        if (SUM.length == questions.length) {
            hideContainer.classList.add('nohide');
            showContainer.classList.add('noshow');
            let as = SUM.map((data, index) => {
                return `<li class="${data == 1 ? 'hideli' : 'hidelired'}">第${index + 1}题:${data == 1 ? '正确' : '错误'}</li>`
            }).join('')
            tables.innerHTML = as;
            let grade = PAGE.data.grade;
            let questionsTotal = PAGE.data.questionsTotal;
            let total = Math.round(grade / questionsTotal * one.length);
            let reach = total >= 80 ? '你太棒啦！' : '成绩不达标'
            gradeStore.innerText = total + reach;
        }  
    },
    nextQuestions: function () {
        let questions = PAGE.data.questions;
        if (PAGE.data.index == questions.length) {
            return
        }
        PAGE.data.sum.push('')
        PAGE.data.index++
        PAGE.register()
        PAGE.render()
    }
}
PAGE.init()