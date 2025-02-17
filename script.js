document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Thiago Veigh', image: './img/imagesveigh.jpg' },
        { name: 'Thalles Roberto', image: './img/downloadthalles.jpg' },
        { name: 'Drake', image: './img/imagesdrake.jpg' },
        { name: 'Eminem', image: './img/downloademinem.jpg' },
        { name: 'Jorge Vercillo', image: './img/jorgevercillo.jpg' },
        { name: 'Justin Biber', image: './img/downloadjustinbiber.jpg' }
    ];
    

    const albumsData = [
        { name: '$ome $exy $ongs 4 U', artist: 'Drake & Partynextdoor', image: './img/album-drake-party.jpg' },
        { name: 'More Life', artist: 'Drake', image: './img/album-morelife.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-racionais.jpg' },
        { name: 'Adjust To The Game', artist: 'Larry June', image: './img/larryjune.jpg' },
        { name: 'Face Oculta', artist: 'Trilha Sonora do Gueto', image: './img/album-trilasonoradogueto.jpg' },
        { name: 'Principio', artist: 'Leonardo Gonlçaves', image: './img/album-leonardo.jpg' }
    ];

        const artistGrid = document.querySelector('.artists-grid')
        const albumGrid = document.querySelector('.albums-grid')

        artistsData.forEach(artist =>{
            const artistCard = document.createElement('div')
            artistCard.classList.add('artist-card')

            artistCard.innerHTML = `
                <img src="${artist.image}" alt="imagem do ${artist.name}">
                <div>
                     <h3>${artist.name}</h3>
                     <p>Artista</p>
                </div>
                    
                
            `
            
            artistGrid.appendChild(artistCard)

            
        })

        albumsData.forEach(album =>{
            const albumCard = document.createElement('div')
            albumCard.classList.add('album-card')

            albumCard.innerHTML = `
                <img src="${album.image}" alt="imagem do ${album.name}">
                <div>
                    <h3>${album.name}</h3>
                     <p>Álbum</p>
                </div>
                
            `
            
            albumGrid.appendChild(albumCard)

            
        })
})

