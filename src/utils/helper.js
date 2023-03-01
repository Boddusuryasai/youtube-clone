export const generateRandomName=() =>{
    const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Harry", "Isabelle", "Jack", "Kate", "Leo", "Mia", "Nathan", "Olivia", "Paul", "Quinn", "Ryan", "Sophie", "Tom", "Uma", "Victor", "Wendy", "Xander", "Yara", "Zoe"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
 
  export const generateRandomMessage=()=> {
    const messages = ["Hello, world! \u{1F44B}", "How are you today? \u{1F914}", "Have a nice day! \u{1F60A}", "Goodbye! \u{1F44B}", "See you later! \u{1F44B}", "Nice to meet you! \u{1F60F}", "What's up? \u{1F63B}", "How's it going? \u{1F60E}", "Keep up the good work! \u{1F44D}"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
 