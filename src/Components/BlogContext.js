import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([{
            "Title": " Mahesh Bhatt on Alia Bhatt being a rare bird, Big B's generous letter & what he and Ranbir Kapoor bond over",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAULdp1.img?h=1438&w=1438&m=6&q=60&o=f&l=f&x=568&y=368",
            "BlogContent": "Alia Bhatt's father and filmmaker Mahesh Bhatt in a recent conversation with Barkha Dutt's Mojo Story has spoken highly of his daughter after her spectacular performance in Gangubai Kathiawadi. Speaking about her craft.",
            "Likes": "1000K"
        },
        {
            "Title": " Alia Bhatt to make Hollywood debut with Heart of Stone, also starring Gal Gadot, Jamie Dornan",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUuWm3.img?h=365&w=486&m=6&q=60&o=f&l=f&x=225&y=134",
            "BlogContent": "Alia Bhatt is all set to make her Hollywood debut in Netflix Original Heart of Stone, starring alongside Gal Gadot and Jamie Dornan.Tom Harper is directing the pic from a script by Greg Rucka and Allison Schroeder. ",
            "Likes": "700K"
        },
        {
            "Title": " You're an extraordinary human: Hrithik Roshan to rumoured girlfriend Saba Azad, here's how she reacted-ZEE News",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUIKjC.img?h=808&w=1438&m=6&q=60&o=f&l=f&x=454&y=171",
            "BlogContent": "Hrithik Roshan recently dropped a heartfelt comment below his rumoured girlfriend and singer Saba Azad's latest Instagram post and fans are even more curious to know if there is a romance brewing between the two",
            "Likes": "5000K"
        },
        {
            "Title": " Samantha says she ‘looks possessed’ as she shares yet another intense workout video; WATCH - PINKVILLA",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://www.pinkvilla.com/files/styles/fbimagesection/public/samantha_workout_video_social.jpg?itok=MlF-0DMX",
            "BlogContent": "Samantha Ruth Prabhu has shared yet another intense workout video on her Instagram handle.",
            "Likes": "600"
        },
        {
            "Title": " Janhvi Kapoor, Clad in Kanjeevaram Saree, Visits Tirupati on Her 25th Birthday",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUICmy.img?h=959&w=1438&m=6&q=60&o=f&l=f&x=496&y=137",
            "BlogContent": "Bollywood diva Janhvi Kapoor celebrated her 25th birthday on March 6. On the day, fans and film industry colleagues of the actor wished her a happy birthday on social media. Meanwhile, Janhvi chose to celebrate her birthday with some of her close ones at the Tirupati Temple in Andhra Pradesh. The actor shared a handful of images from the shrine on Instagram.",
            "Likes": "1M"
        }
    ]);

    const [technology, setTechnology] = useState([{
            "Title": " Pixel 6a: Specs, features, design, expected India price and all that we know so far",
            "CategoryName": "Technology",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUMI8S.img?h=274&w=486&m=6&q=60&o=f&l=f",
            "BlogContent": "Google is reportedly working on its affordable offering, the Pixel 6a. Previous leaks suggested that the phone could launch in May during Google IO 2022. However, a popular tipster now reveals that the launch of Pixel 6a may be delayed to July. The tipster states that the delay is due to chip shortage and supply chain issues.",
            "Likes": "800"
        },
        {
            "Title": " Chandrayaan-2 makes exciting new discovery below Moon's surface",
            "CategoryName": "Technology",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAULAy3.img?h=274&w=486&m=6&q=60&o=f&l=f",
            "BlogContent": "As it awaits the arrival of its successor in August this year, Chandrayaan-2 has once again found new developments happening under the surface of the Moon. Chandra's Atmospheric Composition Explorer-2 (CHACE-2) instrument onboard Chandrayaan-2 has found Argon-40 in the tenuous lunar exosphere.",
            "Likes": "650"
        },
        {
            "Title": " The all new Apple MacBook Pro: Gets the work done, without slowing down",
            "CategoryName": "Technology",
            "PublishedDate": "March 9 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUMus7.img?h=758&w=1348&m=6&q=60&o=f&l=f",
            "BlogContent": "The ports making a comeback include full-size HDMI, card slot reader and the Mag Safe 3 charging port with magnetic connector, other than thunderbolt ports and audio port. While the comeback ports aren’t the most advanced ones but still support high-speed data transfer. I love the MagSafe connector as it prevents the laptop from falling if walked on the cord accidentally.",
            "Likes": "700"
        },
        {
            "Title": " Apple Event on March 8: Check out deals and offers on iPhone 13, iPhone 12 and others",
            "CategoryName": "Technology",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUJa1e.img?h=808&w=1438&m=6&q=60&o=f&l=f",
            "BlogContent": "The iPhone SE 2 is currently available on the Apple India website for Rs 39,900 for the base 64GB storage variant and Rs 44,900 for the 128GB storage model. Customers can pick from three different colours: black, red, or white.",
            "Likes": "900"
        },
        {
            "Title": " Samsung Galaxy F23 launches in India tomorrow: Expected price, availability, specifications",
            "CategoryName": "Technology",
            "PublishedDate": "March 9 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUJegh.img?h=801&w=1438&m=6&q=60&o=f&l=f",
            "BlogContent": "The Galaxy F23 will be available for purchase starting tomorrow at 12 pm (IST), on Flipkart and the official Samsung website. It will come in two colour variants - Aqua Blue and Forest Green, and feature a 6GB RAM + 128GB storage configuration. The storage can further be expanded via a 1TB micro-SD Card.",
            "Likes": "422"
        }
    ]);

    const [hollywood, setHollywood] = useState([{
            "Title": " Alia Bhatt Is Set For Big Hollywood Debut With Gal Gadot. This Is Not A Drill",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 9 2022",
            "ImageAsset": "https://c.ndtvimg.com/2022-03/l770af3_alia-bhatt_625x300_08_March_22.jpg",
            "BlogContent": " Alia Bhatt is going places and the actress has more than one reasons to celebrate. Firstly, her recently-released film Gangubai Kathiawadi is performing well in theatres and has been praised by the critics. Now, the other big news - she is all set to make her big Hollywood debut in a film titled Heart Of Stone. Wait, it gets better. The film stars Gal Gadot and Jamie Dornan too. ",
            "Likes": "800"
        },
        {
            "Title": " Hollywood stars Will Smith and Michael B. Jordan are set to star and produce the sequel to 'I Am Legend'",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 9 2022",
            "ImageAsset": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/3/2022_3$largeimg_913574831.jpg",
            "BlogContent": "Hollywood stars Will Smith and Michael B. Jordan are set to star and produce the sequel to I Am Legend. The film will be written by Akiva Goldsman for Warner Bros Studios. Will Smith took to Instagram to share a teaser photo spelling out the partnership following the news, and tagged Jordan in the post. ",
            "Likes": "800K"
        },
        {
            "Title": " Pinocchio First Look: Tom Hanks Leaves Fans Gasping For Breath As Geppetto, We Are Surely In For A Treat!",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/pinocchio-first-look-shows-scruffy-white-haired-tom-hanks-as-geppetto-001.jpg",
            "BlogContent": "The first look of Tom Hanks-starrer live-action film ‘Pinocchio’, a remake of the 1940 animated Disney film of the same name, was released recently, reports ‘Variety’.The 1940 animated film is itself adapted from Carlo Collodi’s children’s novel ‘The Adventures of Pinocchio’. The film features Hanks in the role of Geppetto, a childless woodworker desperate for a son.",
            "Likes": "2M"
        },
        {
            "Title": " When Justin Bieber’s Junk Was Termed ‘Average’ By An Alleged Prostitute He Visited In Brazil’s Brothel",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/02/justin-bieber-kickstarts-justice-world-tour-with-performing-atop-of-a-fake-airplane-descended-in-the-air-001.jpg",
            "BlogContent": "Justin Bieber is one of those pop artists who has always been in the news either for his hit musical numbers or for random controversies. Since he started off as a child artist, his every movement or statement was scrutinized to a great extent, making him the epitome of drama and internet discussions.",
            "Likes": "800K"
        },
        {
            "Title": " The Dark Knight’s Epic ‘Look At Me’ Scene Of Joker Was Improvised By Heath Ledger, Thanks To Maggie Gyllenhaal",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/did-you-know-maggie-gyllenhaal-couldnt-look-at-heath-ledgers-joker-during-their-intense-scene-in-the-dark-knight-because-she-was-too-scared-01.jpg",
            "BlogContent": "Matt Reeves recently released The Batman starring Robert Pattinson has gained some massive attention and love from the DC fans. However, Christopher Nolan’s 2008 release ‘The Dark Knight’ starring Heath Ledger, Maggie Gyllenhaal, and Christian Bale still stays in our minds and hearts rent-free.",
            "Likes": "1M"
        }

    ]);

    const [fitness, setFitness] = useState([{
            "Title": " For An Athlete's Body: Callisthenics Or Weight Training? Which One Is Better",
            "CategoryName": "Fitness",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://images.news18.com/ibnlive/uploads/2021/10/kevin-durant-16356547413x2.jpg?impolicy=website&width=510&height=356",
            "BlogContent": "For anyone who has not started his or her fitness journey yet, it can be very confusing as to how to approach it. Weight training, cardio, pilates, yoga, functional training are just one of the many avenues to fitness and may sound intimidating to a newbie. However, one of the biggest dilemmas faced by even experienced athletes is whether to go for weight training or callisthenics.",
            "Likes": "800K"
        },
        {
            "Title": " Six at-home fitness challenges to help you reach your goals",
            "CategoryName": "Fitness",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://images.indianexpress.com/2021/10/workout_1200_getty.jpg",
            "BlogContent": "It cannot be denied that the pandemic has pushed everyone to think about their health more holistically. As such, whether practicing yoga or investing in quality exercise equipment, people are attempting to discover different ways to exercise effectively within the four walls of their home, said Rhea Singh Anand, co-founder, Flexnest.",
            "Likes": "1M+"
        },
        {
            "Title": " Treat Excessive Sweating With The Help Of Botox Injection",
            "CategoryName": "Fitness",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://images.news18.com/ibnlive/uploads/2022/01/untitled-1-37-16425166563x2.jpg?impolicy=website&width=510&height=356",
            "BlogContent": "re you someone who sweats excessively even when it’s not hot? If yes, then you might be suffering from Hyperhidrosis. The medical condition happens when people sweat abnormally even in the cold weather. The sweat wets their clothes and makes them smell bad sometimes. Regular medication like antidepressants does not prove helpful in this condition often.",
            "Likes": "800K"
        },
        {
            "Title": " ‘Focus on fitness spurs Indians to smartwatches",
            "CategoryName": "Fitness",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://www.thehindu.com/life-and-style/fitness/3cbade/article37845142.ece/alternates/FREE_660/5th-fit",
            "BlogContent": "The third quarter of 2021 was the biggest quarter for smartwatches,” said Anshika Jain, Senior Research Analyst at Counterpoint. “We have seen that because of COVID-19, there has been a change in customer preferences. People are shifting to smartwatches from traditional watches. ",
            "Likes": "1M"
        },
        {
            "Title": " Pitching fitness as a lifestyle",
            "CategoryName": "Fitness",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/2/w900X450/Pitching.PNG?w=900&dpr=1.5",
            "BlogContent": "When we hit the gym, we stress our muscles as we lift weights. This boosts cell growth and tones our body. The entire science of muscle fitness is based on this very idea, which is called hypertrophy. Only wounds heal, and Dr. Minash Gabriel, a physical therapist and celebrity fitness trainer, knows how.",
            "Likes": "800K"
        }
    ]);

    const [food, setFood] = useState([{
            "Title": " Weight Loss: 5 Refreshing Apple Salads That May Help You Lose Those Extra Kilos",
            "CategoryName": "Food",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://i.ndtvimg.com/i/2016-09/apple-walnut-salad_500x300_41473330913.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
            "BlogContent": "A doctor isn't the only thing that an apple keeps away; it also helps keep excessive fat at bay! With hordes of fad diets and meal plans flooding our social media timelines, it is easy to lose all hope amongst the confusion. However, if you find yourself drowning in the sea of '10-day-weight-loss' programs, let us help you out! One of the simplest and most accessible solutions for weight loss is apple. Yes, you read that right. ",
            "Likes": "500k+"
        },
        {
            "Title": " Weight Loss Snacks: These 5 Delicious Ragi Snacks Can Help You Keep Your Weight In Check",
            "CategoryName": "Food",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://c.ndtvimg.com/2022-03/frp7581_ragi_625x300_10_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
            "BlogContent": "When it comes to weight loss, most of us believe that following a strict diet would help us lose weight. And in some cases, it can. But if you are someone new who is going on a diet for the first time, it can get a bit challenging. At times, you may feel like your hunger isn't fulfilled. ",
            "Likes": "1M+"
        },
        {
            "Title": " Samara wants full biryani, takes control of Paradise Food Court",
            "CategoryName": "Food",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://images.news18.com/ibnlive/uploads/2021/12/biryani-16400956083x2.png?impolicy=website&width=510&height=356",
            "BlogContent": "Homegrown private equity fund Samara Capital has taken control of Paradise Food Court, acquiring most of the 51% stake held by the promoters in the restaurant chain known for its iconic Hyderabadi biryani. Samara, which already held a 49% stake,",
            "Likes": "400K"
        },
        {
            "Title": " World food prices reached an all-time high in February",
            "CategoryName": "Food",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://media.newstrack.in/uploads/business-news/economy/Mar/07/big_thumb/fOOD_62257370169a3.JPG",
            "BlogContent": "The FAO Food Price Index averaged 140.7 points in February, up 3.9% from January, 20.7% higher than a year ago, and 3.1 points higher than in February 2011. The Index tracks monthly changes in international food commodity prices. The FAO Vegetable Oils Price Index led the increase, rising 8.5% from the previous month to a new high",
            "Likes": "1M+"
        },
        {
            "Title": " After pandemic, war in Ukraine new threat to food security",
            "CategoryName": "Food",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://img.etimg.com/thumb/msid-90132853,width-300,imgsize-96230,,resizemode-4,quality-100/wheat.jpg",
            "BlogContent": "The crisis in Ukraine and Russia, one of the world's main sources of grain, fertilizers and energy, presents new challenges in securing food supplies on top of a prolonged pandemic, a U.N. official said Thursday.We weren't going well even before the pandemic, the hunger was rising slowly and then the pandemic hit",
            "Likes": "708K"
        }
    ]);

    return ( <
        BlogContext.Provider value = {
            {
                value1: [bollywood, setBollywood],
                value2: [hollywood, setHollywood],
                value3: [technology, setTechnology],
                value4: [fitness, setFitness],
                value5: [food, setFood]
            }
        } > { props.children } <
        /BlogContext.Provider>
    )
}