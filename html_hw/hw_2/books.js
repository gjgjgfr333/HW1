const arrayImg1 = ['photo/1.png', 'photo/2.png', 'photo/3.png', 'photo/4.png'];
const arrayImg2 = ['photo/5.png', 'photo/6.png', 'photo/7.png', 'photo/8.png'];
const arrayImg3 = ['photo/9.png', 'photo/10.png', 'photo/11.png', 'photo/12.png'];
const arrayImg4 = ['photo/13.png', 'photo/14.png', 'photo/15.png', 'photo/16.png'];
const inputs = document.querySelectorAll('input[name="input"]')
const nameBock = document.querySelectorAll('.text_card2')
const surenameBock = document.querySelectorAll('.text_card3')
const description = document.querySelectorAll('.textinside')
const bookImages = document.querySelectorAll('img[alt="book"]');
console.log(bookImages)

inputs.forEach(item => {
    item.addEventListener('change', () => {
        if (item.checked) {
            let selectDesign = item.value
            switch (selectDesign) {
                case 'option1':
                    nameBock[0].innerText = 'THE BOOK EATERS'
                    nameBock[1].innerText = 'CACKLE'
                    nameBock[2].innerText = 'DANTE: POET OF THE SECULAR WORLD'
                    nameBock[3].innerText = 'THE LAST QUEEN'

                    surenameBock[0].innerText = 'By Sunyi Dean'
                    surenameBock[1].innerText = 'By Rachel Harrison'
                    surenameBock[2].innerText = 'By Erich Auerbach'
                    surenameBock[3].innerText = 'By Clive Irving'

                    description[0].innerText = 'An Unusual Sci-Fi Story About A Book Eater Woman Who Tries Desperately To Save Her Dangerous Mind-Eater Son From Tradition And Certain Death. Complete With Dysfunctional Family Values, Light Sapphic Romance, And A Strong, Complex Protagonist. Not For The Faint Of Heart.'
                    description[1].innerText = 'Are Your Halloween Movies Of Choice The Witches Of Eastwick And Practical Magic? Look No Further Than Here - Where A Woman Recovering From A Breakup Moves To A Quaint Town In Upstate New York And Befriends A Beautiful Witch.'
                    description[2].innerText = 'Auerbach\'s Engaging Book Places The \'Comedy\' Within The Tradition Of Epic, Tragedy, And Philosophy In General, Arguing For Dante\'s Uniqueness As One Who Raised The Individual And His Drama Of Soul Into Something Of Divine Significance—An Inspired Introduction To Dante\'s Main Themes.'
                    description[3].innerText = 'A Timely And Revelatory New Biography Of Queen Elizabeth (And Her Family) Exploring How The Windsors Have Evolved And Thrived As The Modern World Has Changed Around Them.'

                    editPhoto(arrayImg1)
                    break
                case 'option2':
                    nameBock[0].innerText = 'The Body '
                    nameBock[1].innerText = 'Carry: A Memoir of Survival on Stolen Land'
                    nameBock[2].innerText = 'Days of Distraction'
                    nameBock[3].innerText = 'Dominicana'

                    surenameBock[0].innerText = 'By Stephen King'
                    surenameBock[1].innerText = 'By Toni Jenson'
                    surenameBock[2].innerText = 'By Alexandra Chang'
                    surenameBock[3].innerText = 'By Angie Cruz'

                    description[0].innerText = 'Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.'
                    description[1].innerText = 'This memoir about the author\'s relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.'
                    description[2].innerText = 'A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.'
                    description[3].innerText = 'A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.'

                    editPhoto(arrayImg2)
                    break
                case 'option3':
                    nameBock[0].innerText = 'Crude: A Memoir'
                    nameBock[1].innerText = 'Let My People Go Surfing'
                    nameBock[2].innerText = 'The Octopus Museum: Poems'
                    nameBock[3].innerText = 'Shark Dialogues: A Novel'

                    surenameBock[0].innerText = 'By Pablo Fajardo & ​​Sophie Tardy-Joubert'
                    surenameBock[1].innerText = 'By Yvon Chouinard'
                    surenameBock[2].innerText = 'By Brenda Shaughnessy'
                    surenameBock[3].innerText = 'By Kiana Davenport'

                    description[0].innerText = 'Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people'
                    description[1].innerText = 'Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.'
                    description[2].innerText = 'This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.'
                    description[3].innerText = 'An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.'

                    editPhoto(arrayImg3)
                    break
                case 'option4':
                    nameBock[0].innerText = 'Casual Conversation'
                    nameBock[1].innerText = 'The Great Fire'
                    nameBock[2].innerText = 'TBy Howard Bryant'
                    nameBock[3].innerText = 'Slug: And Other Stories'

                    surenameBock[0].innerText = 'By Renia White'
                    surenameBock[1].innerText = 'By Lou Ureneck'
                    surenameBock[2].innerText = 'Rickey: The Life and Legend'
                    surenameBock[3].innerText = 'By Megan Milks'

                    description[0].innerText = 'White\'s impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don\'t, examining the possibilities around how we construct and communicate identity. '
                    description[1].innerText = 'The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide'
                    description[2].innerText = 'With the fall rolling around, one can\'t help but think of baseball\'s postseason coming up! And what better way to prepare for it than reading the biography of one of the game\'s all-time greatest performers, the Man of Steal, Rickey Henderson?'
                    description[3].innerText = 'Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.'

                    editPhoto(arrayImg4)
                    break
                default:
                    return null
            }
        }
    })
})

function editPhoto(arraySrc) {
    bookImages.forEach((img, index) => {
        img.src = arraySrc[index];
    });
}

