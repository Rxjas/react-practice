import React from 'react';

function Message (){
    return(
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi saepe amet labore? Quam, odio dolore rerum officia earum blanditiis neque itaque dicta commodi hic veritatis nihil consequuntur voluptatibus pariatur inventore.</p>
    )
};

function Message2 (){
    return(
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi saepe amet labore? Quam, odio dolore rerum officia earum blanditiis neque itaque dicta commodi hic veritatis nihil consequuntur voluptatibus pariatur inventore.</p>
    )
};

// Exporting like this allows to export more than thing, thus decreasing amount of files needed 
export { Message, Message2 };