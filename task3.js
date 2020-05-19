function recursion(counter) {
    if(counter <= 0) {
        return;
    };
    console.log(counter);
    recursion(counter-1);
};

recursion(10);
