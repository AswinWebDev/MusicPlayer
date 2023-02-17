let json;
import pink from "../assets/Comfortably.mp3";
// import coolio from "../assets/coolio.mp3";
import dido from "../assets/Dido.mp3";
import eminem from "../assets/Eminem.mp3";
import led from "../assets/Stairway.mp3";
import eagles from "../assets/Hotel California.mp3";
import malarnth from "../assets/Malarnthum.mp3";
(function jsonData() {
  json = [
    {
      id: 1,
      title: "Dido - Thank You",
      description:
        "Dido “Thank You was first heard in the 1998 movie Sliding Doors and then released as a single in 2000.  It’s Dido’s biggest single, which she wrote as a tribute to her boyfriend. She wrote the song about when she had been depressed and about how she had lost her house.",
      url: `${dido}`,
      image:
        "https://i.discogs.com/89tPLGL-tI-la_xjFRpV_JTA-SEKxVlLNeLkmFx21Hg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxMzM3/NjUtMTU2NDczMTE5/NC0zMTIwLmpwZWc.jpeg",
    },
    {
      id: 2,
      title: "Pink Floyd - Comfortably Numb",
      description:
        "Pink Floyd’s The Wall is a concept album, or as they considered it, a rock opera. The storyline follows the protagonist, Pink, based on Syd Barrett and Roger Waters. Pink builds a metaphorical wall around himself when his father died in World War II.",
      url: `${pink}`,
      image:
        "https://i1.sndcdn.com/artworks-UJEbcb0yMfWym0ZW-ipMU7A-t500x500.jpg",
    },
    {
      id: 3,
      title: "Eminem - Mocking Bird",
      description:
        "It is no secret that Eminem had a rough upbringing as a child and unfortunately enough the same habit continued to his family as well. Eminem's then wife-Kim was 'distant' from the family and the song speaks of how Eminem is trying hard to console his daughters and be a good dad.",
      url: `${eminem}`,
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fc/Mockingbird_%28Eminem_song%29_cover.jpg",
    },
    {
      id: 4,
      title: "Led Zepplin - Stairway To Heaven",
      description:
        "As the song itself notes, “Sometimes words have two meanings.” The meaning behind “Stairway’”s words seem, if nothing else, infinite. Lyrically, the tune has dazed and confused many a mind-altered listener with its vague take on duality for the better part of a half-century.",
      url: `${led}`,
      image: "https://i1.sndcdn.com/artworks-000127380203-93pa4d-t500x500.jpg",
    },
    {
      id: 5,
      title: "T.m. Soundararajan, P. Susheela - Malarndhum Malaradha",
      description:
        "This song is a classic. It is from a movie called Paasa Malar (flower or affection,the context is of a brother and sister who are singing lullabies to their children. They have been separated by circumstance. As you will observe, emotions flow freely.",
      url: `${malarnth}`,
      image:
        "https://economictimes.indiatimes.com/thumb/msid-73612807,width-1200,height-900,resizemode-4,imgsize-212384/vinyl-records_istock.jpg?from=mdr",
    },
    {
      id: 6,
      title: "Eagles - Hotel California",
      description:
        "The song has been described as being all about American decadence and burnout, too much money, corruption, drugs and arrogance. It has also been interpreted as an allegory about hedonism, self-destruction, and greed in the music industry of the late 1970s.",
      url: `${eagles}`,
      image:
        "https://cdna.artstation.com/p/assets/images/images/009/394/490/large/aileen-ruiz-ruiz-aileen-albumcoverredesign.jpg?1518727526",
    },
  ];
})();

export { json };
