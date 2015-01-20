app.factory('mainService',function(){

var data=[];
   var getQuestionData=function(){
    data=[
        {
            Title:'Programming',
            Questions:['What is the correct value to return to the operating system upon the successful completion of a program?',
                'What is the only function all C programs must contain?',
                'What punctuation is used to signal the beginning and end of code blocks?',
                ' Which of the following is not a correct variable type?',
                'Which of the following is the correct operator to compare two variables?',
                'Who is the founder of C language?',
                'C was primarily developed as:',
                ' Preprocessor Directives are used for:',
                ' Which of the following is a keyword used for a storage class?',
                'C program are converted into machine language with the help of:'],
            Answers:[{
                ans1:'-1',
                ans2: '1',
                ans3: '0',
                ans4: 'Programs do not return a value.'

            },{
                ans1:' start()',
                ans2:'system()',
                ans3:'main()',
                ans4:'program()'

            },
                {
                    ans1:'{}',
                    ans2:'-> and <-',
                    ans3:'BEGIN and END',
                    ans4:'( and )'

                },
                {
                    ans1:'float',
                    ans2:'real',
                    ans3:'int',
                    ans4:'double'

                },
                {
                    ans1:':=',
                    ans2:'=',
                    ans3:'equal',
                    ans4:'=='

                },{
                    ans1:'Bjarne Strous',
                    ans2:'james A Gosling',
                    ans3:'Dennis Ritchie',
                    ans4:'Dr.E.F.codd'
                },
                {
                    ans1:'System programming language',
                    ans2:'General processing language',
                    ans3:'Data processing language',
                    ans4:'None of the above'
                },
                {
                   ans1:'Macro Expansion',
                   ans2:'File Inclusion',
                   ans3:'Conditional Compilation',
                   ans4:'All of these '

                },
                {
                    ans1:'Printf ',
                    ans2:'externa ',
                    ans3:'auto',
                    ans4:'scanf'

                },
                {
                    ans1:'An Editor',
                    ans2:'A compiler',
                    ans3:'an operating system',
                    ans4:'none of these'
                }],
            correctAnswer:['1','main()','{}','real','==','Dennis Ritchie','System programming language','File Inclusion','auto','A compiler']
        },
        {

            Title:'Networking',
            Questions:['When collection of various computers seems a single coherent system to its client, then it is called?',
                'Two devices are in network if?',
                'Which one of the following computer network is built on the top of another network?',
                'Communication channel is shared by all the machines on the network in',
                'Which one of the following extends a private network across public networks?',
                'Full form of NIC','Which of the following are type of twisted pair cable:',
                'Switch is a device of_______ layer of OSI model',
                'TCP/IP also well known as:',
                'ISPX/SPX is used in:',
                'Which color coding used to connect similar device?'],
            Answers:[{
                ans1:'computer network',
                ans2:'distributed system',
                ans3:'both (a) and (b)',
                ans4:'none of the mentioned'

            },{
                ans1:'a process in one device is able to exchange information with a process in another device',
                ans2:'a process is running on both devices',
                ans3:'PIDs of the processes running of different devices are same',
                ans4:'none of the mentioned'
            },
                {
                    ans1:'prior network',
                    ans2:'chief network',
                    ans3:'prime network',
                    ans4:'overlay network'
                },
                {
                    ans1:'broadcast network',
                    ans2:'unicast network',
                    ans3:'multicast network',
                    ans4:'none of the mentioned'
                },
                {
                    ans1:'local area network',
                    ans2:'virtual private network',
                    ans3:'enterprise private network',
                    ans4:'storage area network'
                },
                {
                    ans1:'New Internet Connection',
                    ans2:'Network Interface Card',
                    ans3:'Network interface Connection',
                    ans4:'Net interface Card'
                },
                {
                    ans1:'Coaxial cable',
                    ans2:'STP',
                    ans3:'UTP',
                    ans4:'only B and C'
                },
                {
                    ans1:'Network Layer',
                    ans2:'Data link layer',
                    ans3:'application layer',
                    ans4:'session layer'
                },
                {
                    ans1:'osi model',
                    ans2:'TCP model',
                    ans3:'DOD model',
                    ans4:'Network Model'
                },
                {
                    ans1:'Novells Netware network' ,
                    ans2:'Mac',
                    ans3:'Apple',
                    ans4:'microsoft'
                },
                {
                    ans1:'Straight Cable',
                    ans2:'Cross over Cable',
                    ans3:'Serial cable',
                    ans4:'All of these'
                }],
            correctAnswer:['distributed system','a process in one device is able to exchange information with a process in another device','overlay network','broadcast network','virtual private network','Network Interface Card','only B and C','Data link layer','DOD model','Novells Netware network','Cross over Cable']
        },
        {
            Title:'General Knowledge',
            Questions:['The United Nations was founded on',
                'Which country from the following is NOT the member of UNO?',
                'The International Court of Justice is located in',
                'There are __________ members of SAARC.',
                'The currency of Indonesia is',
                'The European Unions working capital is in',
                'There are _________ non-permanent members of the security council.',
                'The headquarter of NATO is located in _________.',
                'Organization of Islamic Cooperation (OIC) has __________ official languages.',
                'The motto of UNO is _________.'],
            Answers:[{
                ans1:'March 24, 1945',
                ans2:'October 24, 1945',
                ans3:'March 24, 1949',
                ans4:'October 24, 1950'
            },
                {
                ans1:'Vatican City',
                ans2:'Afghanistan',
                ans3:'North Korea',
                ans4:'Vaitnam'
            },
                {
                    ans1:'New York',
                    ans2:'Washigton',
                    ans3:'Geneva',
                    ans4:'The Hague'
                },
                {
                    ans1:'5',
                    ans2:'6',
                    ans3:'7',
                    ans4:'8'
                },
                {
                    ans1:'rupiah',
                    ans2:'dinar',
                    ans3:'rangit',
                    ans4:'riyal'
                },
                {
                    ans1:'London',
                    ans2:'Lisbon',
                    ans3:'Austria',
                    ans4:'Brussels'
                },
                {
                    ans1:'5',
                    ans2:'7',
                    ans3:'10',
                    ans4:'15'
                },
                {
                    ans1:'New York',
                    ans2:'Paris',
                    ans3:'Geneva',
                    ans4:'Brussels'
                },
                {
                    ans1:'1',
                    ans2:'2',
                    ans3:'3',
                    ans4:'4'
                },
                {
                    ans1:'Its your world!',
                    ans2:'Life for All!',
                    ans3:'Peace!',
                    ans4:'Love and Peace!'
                }],
            correctAnswer:['October 24, 1945','Vatican City','The Hague','8','rupiah','Brussels','10','Brussels','3','Its your world']
        }
    ];

return data;
    }
    return {getQuestionData:getQuestionData};
});