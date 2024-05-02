var config = {
    style: 'mapbox://styles/prima-de-afuera/cltsu0va100fu01qe41occluu',
    accessToken: 'pk.eyJ1IjoicHJpbWEtZGUtYWZ1ZXJhIiwiYSI6ImNsc2RwM2FkejBhaWIyc282cWppdnJ0bjUifQ.oWFeT7XBoNPrF1IbDJqn_w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: ' (Un)Mapping Conservation in Borinken',
    // subtitle: ' “Every place has an energy, a vibration” - Dr. Michelle Montgomery, University of Washington- Tacoma',//
    byline: 'Return to Home <a href="site-index.html">Home</a>',
    footer: 'Sources <a href="https://UnMappingBorinken.com" target="_blank">here</a> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Intro',
            /*image: '',*/
            description: 'I begin this story in the depths of the big waters, the mother. There are many stories about the oceans and seas that make up the Caribbean. I hear it told that these waters were poured out from a gourd to connect all that rises from where two continental plates meet, including the islands of Borinkén. Some say the waters that connect us make Caribbean people kin. These stories and kinships are gifts as much as they are responsiblities. This is the story I, as a Boricua in diaspora, have come to believe.',
            location: {
                center: [-65.86788, 16.89670],
                zoom: 5.97,
                pitch: 45,
                bearing: -156.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Conservation in Borinkén',
            /*image: './path/to/image/source.png',*/
            description: '<p> Contemporary conservation scientists, climate change researchers, and environemtnal planners have begun turning to traditional ecological knowledge (TEK) to create effective climate mititgation and energy infrastucture solutions. In Borinkén (PR), TEK is alive and well. But as more realtives are lost to death and displacement, our traditional conservation and care practices are at risk of theft and appropriation. </p> <br> <p> It is important then to support the work of those who make it possible for generations of Afro and Indigneous descendant communities to continue resilient and culturally rooted conservation practices. Three examples of islanders doing this land-based work include El Grito, Departamento de la Agricultura, and Para la Naturaleza. On the map to your left you will see the approxiamte area within which they work in the eastern and south eastern area of Borinkén. <p> <br> Keep scrolling for more. ',
            location: {
                center: [-65.88252, 18.03668],
                zoom: 13.01,
                pitch: 30.34,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'IALA',
            /*image: './path/to/image/source.png',*/
            description: 'IALA, el Instituto para la Agroecología, is a nascent agroecology farm and education center located in the central eastern mountain ranges of Borinkén. IALA is cooperatively managed by several families and directed by Katia R. Avilés Vázquez, MS, PhD. For more, click  <a href="https://www.iala-pr.org/programas">here<a/>.',
            location: {
                center: [-66.17071, 18.11296],
                zoom: 13.45,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Bosque del Pueblo',
            /*image: './path/to/image/source.png',*/
            description: 'The Bosque del Pueblo forest project is managed by Casa Pueblo, well known agroecological and environemtnal non-profit which was established in the 1980s. Among the founding members are Sra. Tinti Deyá Díaz, Ing. (Engineer), Alexis Massol González, and a cadre of locals who made it into one of the only locations to have solar-powered electricity after Hurricanes Maria and Irma. For more about Casa Pueblo, click <a href="https://casapueblo.org/las-mujeres-y-la-energia-solar/">here<a/>. ',
            location: {
                center: [-66.67960, 18.17683],
                zoom: 13.55,
                pitch: 45.00,
                bearing: 16.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Reserva Natural Cueva del Indio',
            /*image: './path/to/image/source.png',*/
            description: 'La Cueva del Indio is an ecological and archaeological reserve on the coast of Arecibo known for its spiritual significance to Taino peoples. While the site is at risk of damage from climate change and development, it is not listed as a site for cultural climate protection under the National Park Service <a href=“https://www.nps.gov/subjects/climatechange/southeastclimatescience.htm”>National Park Service<a/>.',
            location: {
                center: [-66.64439, 18.49266],
                zoom: 13.48,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 

        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Bosque Estatal de Maricao',
            /*image: './path/to/image/source.png',*/
            description: 'In the map on the left of this screen is a map image of the Maricao State Forest, located on the big island of Borinkén and made up of 10,803 of conserved cuerdas (10,492 acres). These 10,803 cuerdas serves as a watershed to the coastal plains, are rich in biodiverse flora and fauna, and are currently managed by the Puerto Rican Department of Natural and Environmental Resources (DNER). <br> <br> Created in 1933 and 1942  New Deal Era Civilian Conservation Corps (CCC) programming. The CCC programming was not the first colonial government to have interest in this forested area.',
            location: {
                center: [-66.98161, 18.13661],
                zoom: 12.74,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Outro',
            /*image: './path/to/image/source.png',*/
            description: 'What started as a research question about the coloniality of natural resource management and conservation policy in Puerto Rico, has become project mapping eco-cultural conservation across Borinken.  Whereas settler colonial conservation is primarily concerned with flora and fauna, eco-cultural conservation is concerned with the intergenerational connections between Afro and Indigenous descendant peoples and their ecosystems and establishing those relationships as vital to conservation and climate mitigation long-term. For this project I focus primarily on forest mountain regions in part because of my ancestral connection and in part to continue effort to highlight the eco-cultural relationship between mountains and coastal ecologies. Conservation must address both; the survival of one is linked with the survival of the other. <br> This project is ongoing, so if you have any ideas, comments, or concerns please email me at dejesu16@msu.edu',
            location: {
                center: [-65.86788, 16.89670],
                zoom: 5.97,
                pitch: 45.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 

        {
            id: 'eigth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'About the Author',
            image: '/Users/angelica_dejesus/Documents/GitHub/UnMapping/storytelling-main/src/images/BambooBlackAndWhite.JPG',
            description: 'I am Angélica De Jesus, doctoral student and mami living and visiting in Nkewjong, Michigan. My mothers people are from Mexico and my fathers people are from Borinkén. Nkwejong, like much of the Great Lakes region, is the contemporary and ancestral homelands of the Anishinaabeg peoples, the Confederacy of the People of the Three Fires. Like the Caribbean, it is a place forged of blood and violence, but also shaped by the survival of Indigenous and Black/Afro-descendant peoples. I, like many other Michigan State University students, are specially indebted (in a good way) to the Anishinaabeg peoples whose continual surivance in the face of settler colonialism, shapes the worlds and landscapes upon which MSU exists and that we learn and benefit from today. As an MSU instructor and student I am honored to work towards being in good relationship with Indigenous peoples of this place and I am honored work towards being a good prima-de-afuera to all my Caribbean cousins, human and more than human.',
            location: {
                center: [-84.54733, 42.72498],
                zoom: 13.71,
                pitch: 45.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
