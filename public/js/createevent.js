document.getElementById('cEventButton').addEventListener('click',function(){
    document.querySelector('.modal').style.display = 'flex';
    window.scrollTo(0,document.body.scrollHeight);
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
});

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modal').style.display = 'none';
    window.onscroll = function() {}; 
});

