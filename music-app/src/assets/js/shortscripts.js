$(document).ready(function(){

  new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  }, [
    {
      title:"Cro Magnon Man",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
    },
    {
      title:"Your Face",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
    },
    {
      title:"Cyber Sonnet",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
    },
    {
      title:"Tempered Song",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
    },
    {
      title:"Hidden",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
    },
    {
      title:"Lismore",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
    },
    {
      title:"The Separation",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
    }
  ], {
    swfPath: "../../dist/jplayer",
    supplied: "oga, mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true
  });
});
