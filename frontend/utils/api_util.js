import API_KEY from './api_key';

export const CHAMPION_DATA = "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json";

export const fetchChampions = () => {
  return $.getJSON(CHAMPION_DATA);
}

export const getChampionRotations = () => (
    $.ajax({
      type: "GET",
      url: `https://na1.api.riotgames.com/lol/platform/v3/champions/1?api_key=${API_KEY}`,
      dataType: "JSON",
      error: (xhr, status) => { console.log(xhr, status) },
    })
);

export const fetchChampionIcon = (championName) => (
  `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${championName}.png`
)
//
// export const getChampion = (championName, callback) => {
//   $.getJSON(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${championName}.json`,
//       callback )
// }