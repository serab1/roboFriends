import React from "react";
import Card from "./Card";


const CardList = ({robots}) =>{

  

    const cardComponent = robots.map((user , index) => {
        return (<Card key={index} id={robots[index].id} name={robots[index].name} email = {robots[index].email} />);
    })



    return(
        <div>
             {cardComponent}
        </div>

        // یدونه لوپ بزنیم روی روبات ها و یک کامپوننت کارت ایجاد کنیم
    //     <div>
    //     <Card id={robots[0].id} name={robots[0].name} email = {robots[0].email} />
    //     <Card id={robots[1].id} name={robots[1].name} email = {robots[1].email} />
    //     <Card id={robots[2].id} name={robots[2].name} email = {robots[2].email} />
    //     <Card id={robots[3].id} name={robots[3].name} email = {robots[3].email} />
    //   </div>
    );
}

export default CardList;