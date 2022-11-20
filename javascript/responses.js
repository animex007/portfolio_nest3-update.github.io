function getBotResponse(input) {
    // Simple responses
    if (input == 1) {
        return "You can contact us on github or at these emails listed below"
    } else if (input == 2) {
        return "This site is developed by a team of 6 students <br> here is more info regarding them";
    }else if (input == 3) {
        return "Sorry for the inconviniance .... but, You can mail us your query on <br> mail.example.xyz";
    }else if (input == "I love PortfolioNest!") {
        return "Thank you!! <br> But try asking something about this site";
    }else {
        return "Try asking something else";
    }
}