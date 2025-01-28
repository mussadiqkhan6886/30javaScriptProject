const nameValue = document.querySelector('.name');
const textValue = document.querySelector('.text');
const imgValue = document.querySelector('#img');


const testimonials = [
    {
        name: 'Patrick Cox',
        text: "couldn't have asked for a better testimonial than Bob Dylan parting with his own cash for a pair of my shoes.",
        image: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: 'Marguerite Gardiner',
        text: "The chief prerequisite for a escort is to have a flexible conscience and an inflexible politeness.",
        image: "https://images.pexels.com/photos/4855373/pexels-photo-4855373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: 'Martin Luther King, Jr.',
        text: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
        image: 'https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'Orson Welles',
        text: "We're born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we're not alone.",
        image: 'https://images.pexels.com/photos/5876516/pexels-photo-5876516.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
];
let id = 0;
function updateTestimonial(){
    nameValue.textContent = testimonials[id].name;
    textValue.textContent = testimonials[id].text;
    imgValue.src = testimonials[id].image;
    id++;
    if(id >= testimonials.length){
        id = 0;
    }
    setTimeout(() => {
        
        updateTestimonial();
    }, 3000)
};

updateTestimonial();