<script>
  import { scrollTo } from "../../../scroll.js";

  const content = [
    { id: "#first", name: "Language" },
    { id: "#second", name: "Cuisine" },
    { id: "#third", name: "The life of people" },
    { id: "#fourth", name: "Traditions" },
    { id: "#fifth", name: "Legends" },
  ];
</script>

<svelte:head>
  <title>PEOPLE</title>
  <meta
    name="Description"
    content="The population of Sukhum is a very progressive young people and a wise old part. Here we talk about hospitality, interests and trditions"
  />
  <meta itemprop="name" content="PEOPLE" />
  <meta
    itemprop="description"
    content="The population of Sukhum is a very progressive young people and a wise old part. Here we talk about hospitality, interests and trditions"
  />
  <meta property="og:url" content="https://cyxym.netlify.com/en/people" />
  <meta property="og:title" content="PEOPLE" />
  <meta
    property="og:description"
    content="The population of Sukhum is a very progressive young people and a wise old part. Here we talk about hospitality, interests and trditions"
  />
  <meta name="twitter:url" content="https://cyxym.netlify.com/en/people" />
  <meta name="twitter:title" content="PEOPLE" />
  <meta
    name="twitter:description"
    content="The population of Sukhum is a very progressive young people and a wise old part. Here we talk about hospitality, interests and trditions"
  />
  <meta name="apple-mobile-web-app-title" content="PEOPLE" />
</svelte:head>

<h1>PEOPLE</h1>
<figure>
  <img src="images/people-main.jpg" alt="The flag of Abkhazia" />
</figure>
<nav>
  {#each content as item}
  <button href="{item.id}" on:click="{scrollTo}">{item.name}</button>
  {/each}
</nav>
<h2 id="first">Language</h2>
<figure>
  <img src="images/people-1.jpg" alt="Abkhazian alphabet" loading="lazy" />
  <figcaption>Abkhazian alphabet</figcaption>
</figure>
<p>
  Abkhazian language is very unique, as it was formed long ago. The alphabet
  consists of 64 letters. Abkhazian language consists of several dialects, which
  consist of different words and slightly differ in pronunciation.
</p>
<p>
  The founder of the Abkhazian written literature is Dmitry Gulia, a national
  writer and poet. Abkhazian literature is very extensive and includes many
  historical works that tell the history of Abkhazia.
</p>
<p>
  Also, people in Sukhum speak Russian.
</p>
<h2 id="second">Cuisine</h2>
<figure>
  <img src="images/people-2.jpg" alt="Hachpur «The Boat»" loading="lazy" />
  <figcaption>Hachpur «The Boat»</figcaption>
</figure>
<p>
  Our cuisine is quite diverse. The main dish on the "Abkhazian table" is
  mamalyga (on the Abkhazian - abysta). Also, along with mamalyga we prefer to
  eat khachapur. The main additives to the meal are asydzbal, akud (beans) and
  adjika. As Abkhazia loves spicy food, they often add adzhika. Traditional
  dishes can be found on the table not only on holidays, but also on any usual
  day. They cook only natural food, as families have their own household.
</p>
<p>
  An interesting part of "Abkhazian cuisine" is Apatskha. It is a place where a
  group of people can gather and eat traditional food. Such places are very
  popular with both local people and visitors. Mamalyga is cooked in a pot,
  sometimes in front of clients.
</p>
<h2 id="third">The life of people</h2>
<figure>
  <img src="images/people-3.jpg" alt="Musician on the beach" loading="lazy" />
  <figcaption>Musician on the beach</figcaption>
</figure>
<p>
  Abkhazia is famous for its hospitality. Residents of each of the cities are
  happy to see the guests and receive them well.
</p>
<p>
  According to tradition, the younger ones respect the older ones, while the
  older ones respect them. This respect is manifested in everything: both in
  various public gatherings, and in the usual behavior in the home environment.
</p>
<p>
  People of Sukhum are fond of various directions of art: drawing, photography,
  films; they are interested in modern technologies, in particular blockchain
  and cryptocurrency.
</p>
<p>
  Pupils in schools are interested in competitions on various subjects, such as
  history, geography, biology and other sciences.
</p>
<p>
  Sukhum has developed various sports: wrestling, football, swimming, tennis,
  athletics and others.
</p>
<p>
  The city often hosts events of various kinds.
</p>
<h2 id="fourth">Traditions</h2>
<figure>
  <img src="images/people-4.jpg" alt="Folk dances" loading="lazy" />
  <figcaption>Folk dances</figcaption>
</figure>
<p>
  Traditions of Abkhazians are very interesting and diverse. In addition to high
  respect for elders and juniors, there are various others.
</p>
<p>
  It's very interesting to see a wedding ceremony. The groom carefully chooses
  the bride and gets acquainted, before the final decision on marriage visits
  her with the intermediary, who is convinced of the mutual sympathy between
  them. Then the bride is taking, it's a very interesting part of the whole
  rite. The capture is accompanied by a celebration.
</p>
<p>
  National dress of Abkhazians is also important. This is a very important
  attribute in dancing. Clothes decorate the dances and give them a special
  character.
</p>
<p>
  There are also traditions associated with food and drink. Previously, if a
  guest came to the house, the owner sent the child for a jug of water. It was
  believed that the colder the water, the more refreshing it was, the more
  respect the owner had for the guest. The best food in the house is always
  placed on the table, so the guest is made to understand that he is honored in
  the house.
</p>
<p>
  The people of the country try to preserve traditions in order to diversify the
  history of the homeland and bring happiness to life.
</p>
<h2 id="fifth">Legends</h2>
<figure>
  <img src="images/people-5.jpg" alt="The Ritsa lake" loading="lazy" />
  <figcaption>The Ritsa lake</figcaption>
</figure>
<p>
  Many legends still exist in Abkhazians to this day. One of the most famous
  legends is the legend of the mountain lake Ritsa:
</p>
<p>
  Once upon a time there was a valley in this place, and the river was flowing
  down it. On the fairytale pastures along the banks of the river was a herd of
  beautiful girl named Ritsa, the only sister of three brothers - Agepsta,
  Acetuki and Pshegishkhi. During the day the brothers were hunting, in the
  evenings they gathered at the hearth. Ritsa cooked dinner, the brothers sang
  while admiring it.
</p>
<p>
  Once brothers went hunting in the distant mountains. The day passed, the
  second day, they all did not come back. Ritsa, missing them, all looked at the
  road and sang with her charming voice.
</p>
<p>
  Two forest robbers Gegha and Yupshar heard her voice. When they saw her, they
  decided to kidnap her. Yupshara grabbed her and ridden her on his horse
  through the valley. Gegha covered for him.
</p>
<p>
  The brothers shouted for help. They rushed to catch up. Psheghishha threw a
  sword of warriors at the robbers, but missed. The sword fell and blocked the
  river. Water quickly began to flood the valley and in a moment turned it into
  a lake.
</p>
<p>
  Sung up, the help of Ritsa winged, and she struggled to escape from the
  tenacious hands of robbers, but, unable to hold her legs, fell into the
  bubbling lake. No matter how hard the brothers tried, they could not save her.
  Ritsa stayed under water.
</p>
<p>
  Then Przegishha grabbed Yupshara and threw him into the lake. But the waters
  of Ritzie did not take the scoundrel and threw him through the sword of
  Psheghishkhi and carried him to the sea. Gegha ran after him, but he could not
  save his friend. Then he joined him.
</p>
<p>
  The brothers were petrified with terrible grief and turned into high
  mountains. They are still standing over the lake, protecting the peace of the
  unforgettable Ritza.
</p>
