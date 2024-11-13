const descriptions = {
    item1: "The original copies of the Indian Constitution were painstakingly handwritten in English and Hindi calligraphy. This unique approach added a touch of artistry to the legal document that would shape the nation.",
    item2: "While the Indian Constitution is a masterpiece in its own right, it also draws inspiration from various sources. It incorporates elements from the constitutions of countries like the United States, Ireland, Canada, and Australia, creating a harmonious blend of democratic principles.",
    item3: "With its extensive provisions covering various aspects of governance, the Indian Constitution holds the record for being the longest written constitution in the world. Its comprehensive nature reflects the complexity of governing a diverse nation.",
    item4: "The Indian Constitution was crafted with the vision of uniting a diverse nation. It recognizes the importance of cultural, linguistic, and religious diversity, while also emphasizing the principles of equality and justice for all citizens.",
    item5: "The Indian Constitution is not a static document; it is a dynamic framework that can evolve with the changing needs of the nation. The process of amendment allows for necessary modifications to keep the Constitution relevant and responsive to the aspirations of the people.",
    item6: "The Indian Constitution is a testament to the ideals of democracy. It enshrines fundamental rights, ensures the separation of powers, and provides for a parliamentary system of government, making India the largest democracy in the world.",
    item7: "The Constitution establishes a system of checks and balances to prevent the concentration of power in any single branch of government. This ensures that the executive, legislative, and judicial branches function independently, maintaining a delicate equilibrium.",
    item8: "The Indian Constitution can be seen as a social contract between the state and its citizens. It outlines the rights and responsibilities of both, ensuring a harmonious relationship and promoting the well-being of all.",
    item9: "The Indian Constitution has inspired many other nations, particularly those emerging from colonial rule. Its emphasis on democratic values, social justice, and secularism has made it a global model for constitutional governance.",
    item10: "The journey of the Indian Constitution is ongoing. As the nation evolves, so too must its constitutional framework. The ongoing process of interpretation and adaptation ensures that the Constitution remains a living document, guiding India towards a brighter future."
};

function spinWheel() {
    // Random rotation degree between 0 and 3600 degrees (to ensure several spins)
    let randomDeg = Math.floor(Math.random() * 3600) + 360;
    
    // Spin the wheel with the random degree
    document.getElementById('wheel').style.transform = `rotate(${randomDeg}deg)`;

    // After the animation, determine the item that the arrow will point to
    setTimeout(() => {
        const itemIndex = Math.floor((randomDeg % 360) / 36); // 360 degrees / 10 items = 36 degrees per item
        const itemKey = `item${itemIndex + 1}`;
        document.getElementById('description').style.display = 'block';
        document.getElementById('description').innerText = descriptions[itemKey];
    }, 4000); // Wait until the spinning stops (4s transition)
}
