document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Costa Gold', image: './img/album-costagold.jpg' },
        { name: 'Bad Bunny', image: './img/album-DeBí TiRAR MáS FOToS.jpg' },
        { name: 'Drake', image: './img/album-drake.jpg' },
        { name: 'Eminem', image: './img/album-eminem.jpg' },
        { name: 'Jorge Vercillo', image: './img/albumjorgevercillo.jpg' },
        { name: 'Justin Biber', image: './img/album-justin.jpg' }
    ];
    

    const albumsData = [
        { name: 'Compton', artist: 'Kendrick', image: './img/album-kendrick.jpg' },
        { name: 'Passionfruit', artist: 'Drake', image: './img/album-morelife.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-racionais.jpg' },
        { name: 'Deus está aqui', artist: 'Thalles Roberto', image: './img/album-thallesroberto.jpg' },
        { name: 'Face Oculta', artist: 'Trilha Sonora do Gueto', image: './img/album-trilasonoradogueto.jpg' },
        { name: 'Sublime', artist: 'Leonardo Gonlçaves', image: './img/album-leonardo.jpg' }
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
                     <p>artista</p>
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
                     <p>${album.name}</p>
                </div>
                
            `
            
            albumGrid.appendChild(albumCard)

            
        })
})

