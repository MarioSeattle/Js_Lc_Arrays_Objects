function Course(title,instructor,level,publish,views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.publish = publish;
    this.views = views;
    this.updatesViews = function () {
        return ++this.views;
    };
}
//var course01 = new Course("JS","Mario",1,true,0);
//var course02 = new Course("ES6","Jorge",1,true,12345);

// Or using Array
var courses = [
    new Course("JS","Mario",1,true,0),
    new Course("ES6","Jorge",1,true,12345)
];

//console.log(courses);
//console.log(course01);
//console.log(course02);

console.log(courses[1].instructor);
