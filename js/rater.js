export function Rater(ratingElement){
    const stars = ratingElement.querySelectorAll('.star');

    const setRating = ev =>{
        ratingElement.setAttribute(
            'data-rating', ev.currentTarget.getAttribute('data-value'))

    };

    const ratingHover = ev =>{
        const currentHover = ev.currentTarget.getAttribute('data-value');
        highlighRating(currentHover);
    };

    const resetRating = ev => {
        const currentRating = ratingElement.getAttribute('data-rating');
        highlighRating(currentRating);
    };

    const highlighRating = (rating) => {
        stars.forEach(star => {
            star.style.color = 
            rating >= star.getAttribute('data-value') ? 'yellow' : 'gray';       
        });
    } 


    resetRating();

    stars.forEach(star =>{
        star.addEventListener('click', setRating);
        star.addEventListener('mouseover', ratingHover);
    })

    ratingElement.addEventListener('mouseout', resetRating);
} 