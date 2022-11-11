import React from 'react';
import CardList from './CardList' ;
// import {robots} from './robots.js'  ;
import SearchBox from './SearchBox';
import './app.css';
import ErrorBoundry from './ErrorBoundry';



// const App = () => {
//     return(
//         <div className='tc'>
//             <h1>Robo Friends</h1>
//             <SearchBox />
//             <CardList robots={robots} />
//         </div>
//     );
// }

// تبدیل تابع به کلاس 
 
class App extends React.Component  {
    constructor(){
        super()
        this.state = {
            robots : [] ,
            Searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}))
    }


       

     
        // ارور میده
        // state 
        //داره صدا زده میشه ولی داخل فایل 
        //app
        //که نیستش داخل فایل
        //searchBox 
        // هست
        //راه حل 
        // قبل
        //onSearchChange (event){}
        //بعد
        //onSearchChange =(event) => {}
    onSearchChange =(event) =>{
        // تغییر سرچ فیلد به اون چیزی که کاربر وارد کرده
        this.setState({Searchfield : event.target.value});
        // برای چک کردن اینک ایا درست هست یا ن
        // console.log(event.target.value);
        //  الان مقداری که داخل سرچ لیست وارد شده و دارم رو میتوننم به صورت مستقیم
        // روی این روبات ها اعمال بکنم دگ حالا چطوری ؟
        // toLowerCase  برای این استفاده میشه که اگ بزرگ یا کوچک نوشتیم به درستی سرچ کنه
        // includes چک میکنه چیزی که میخوام داخل این رشته موجود هست یا ن
        // const filteredRobot = this.state.robots.filter(robots =>{
        //     return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        // })
        // filteredRobot برای چک کردن
        // console.log(filteredRobot);
    }

    render(){
        const filteredRobot = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>
                    <h1 className = "f1">Robo Friends</h1>
                    
                        <SearchBox SearchChange ={this.onSearchChange} />
                    <ErrorBoundry>
                        <CardList robots={filteredRobot} />
                    </ErrorBoundry>
                    
                </div>
            );
        }
        
    }




}

export default App;