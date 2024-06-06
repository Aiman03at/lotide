const countLetters=require("../countLetters")

result1=countLetters("lighthouse labs");
    
assertEqual(result1["l"],2);
assertEqual(result1[" "],undefined);
assertEqual(result1["y"],2);
assertEqual(result1["a"],1);

    