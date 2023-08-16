document.addEventListener("DOMContentLoaded", function () {
    const findSignButton = document.getElementById("find-sign");
    const zodiacResult = document.getElementById("zodiac-result");
    const zodiacTraits = document.getElementById("zodiac-traits");
    const zodiacCareer = document.getElementById("zodiac-career");
    const zodiacPartner = document.getElementById("zodiac-partner");


    findSignButton.addEventListener("click", function () {
        const dobInput = document.getElementById("dob");
        const dob = new Date(dobInput.value);
        const { sign, traits, career, partner } = getZodiacSign(dob);
        zodiacResult.textContent = `Your Zodiac Sign is ${sign}`;
        zodiacTraits.textContent = `Personality Traits: ${traits}`;
        zodiacCareer.textContent = `Career Traits: ${career}`;
        zodiacPartner.textContent = `Ideal Partner: ${partner}`;
    });

    function getZodiacSign(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const findSignButton = document.getElementById("find-sign");
    const zodiacResult = document.getElementById("zodiac-result");
    const zodiacTraits = document.getElementById("zodiac-traits");
    const zodiacCareer = document.getElementById("zodiac-career");
    const zodiacPartner = document.getElementById("zodiac-partner");
    const shape = document.getElementById("eye-shape");

    findSignButton.addEventListener("click", function () {
        const dobInput = document.getElementById("dob");
        const dob = new Date(dobInput.value);
        const { sign, traits, career, partner } = getZodiacSign(dob);
        zodiacResult.textContent = `Your Zodiac Sign is ${sign}`;
        zodiacTraits.textContent = `Personality Traits: ${traits}`;
        zodiacCareer.textContent = `Career Traits: ${career}`;
        zodiacPartner.textContent = `Ideal Partner: ${partner}`;

        if (sign === "Aries") {
            shape.src= 'Aries.jpg';
        } else if (sign === "Virgo") {
            shape.src = 'Virgo.jpg'
        } else if (sign === "Sagittarius") {
            shape.src = "Saggitarius.jpg"
        } else if (sign === "Libra") {
            shape.src = "Libra.jpg"
        } else if (sign === "Taurus") {
            shape.src = "Taurus.jpg"
        } else if (sign === "Aquarius") {
            shape.src = "Aquarius.jpg"
        } else if (sign === "Leo") {
            shape.src = 'Leo.jpg'
        } else if (sign === "Gemini") {
            shape.src = 'Gemini.jpg'
        } else if (sign === "Scorpio") {
            shape.src = 'Scorpio.jpg'
        } else if (sign === "Cancer") {
            shape.src = 'Cancer.jpg'
        } else if (sign === "Capricon") {
            shape.src = "Capricon.jpg"
        } else if (sign === "Pisces") {
            shape.src = "Pisces,jpg"
        }
        
        
    });

    function getZodiacSign(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const zodiacSigns = [
           
                { sign: "Aries", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, traits: "Energetic, independent, impulsive", career: "Entrepreneur, manager, athlete", partner: "Libra, Leo, Sagittarius" },
                { sign: "Taurus", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, traits: "Patient, practical, reliable", career: "Artist, banker, chef", partner: "Scorpio, Cancer, Capricorn" },
                { sign: "Gemini", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20, traits: "Adaptable, curious, witty", career: "Writer, teacher, salesperson", partner: "Sagittarius, Aquarius, Libra" },
                { sign: "Cancer", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22, traits: "Nurturing, intuitive, emotional", career: "Nurse, counselor, chef", partner: "Capricorn, Taurus, Pisces" },
                { sign: "Leo", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, traits: "Charismatic, confident, creative", career: "Actor, designer, manager", partner: "Aquarius, Gemini, Libra" },
                { sign: "Virgo", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, traits: "Analytical, detail-oriented, practical", career: "Accountant, editor, scientist", partner: "Pisces, Cancer, Capricorn" },
                { sign: "Libra", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22, traits: "Charming, diplomatic, indecisive", career: "Lawyer, diplomat, artist", partner: "Aries, Gemini, Leo" },
                { sign: "Scorpio", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21, traits: "Intense, determined, secretive", career: "Psychologist, detective, researcher", partner: "Taurus, Cancer, Virgo" },
                { sign: "Sagittarius", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21, traits: "Adventurous, optimistic, blunt", career: "Travel writer, philosopher, teacher", partner: "Gemini, Leo, Aries" },
                { sign: "Capricorn", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, traits: "Practical, disciplined, ambitious", career: "CEO, architect, economist", partner: "Cancer, Virgo, Taurus" },
                { sign: "Aquarius", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, traits: "Innovative, independent, eccentric", career: "Inventor, scientist, social worker", partner: "Leo, Libra, Gemini" },
                { sign: "Pisces", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, traits: "Compassionate, artistic, sensitive", career: "Artist, therapist, musician", partner: "Virgo, Scorpio, Cancer" },
            ];


            

        for (const zodiac of zodiacSigns) {
            if ((month === zodiac.startMonth && day >= zodiac.startDay) || (month === zodiac.endMonth && day <= zodiac.endDay)) {
                return zodiac;
            }
        }

        return { sign: "Unknown", traits: "Mysterious, unique", career: "Explorer of uncharted territories", partner: "Another unique soul" };
    }

  
});
