document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const searchInput = document.querySelector('.search-bar');
    const songList = document.getElementById('Songs');
    const addForm = document.getElementById('adds');

    // Function to add a song
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const titleInput = document.getElementById('song-title');
        const artistInput = document.getElementById('artist-name');

        // Create new list item
        const newSong = document.createElement('li');
        newSong.className = 'song d-flex justify-content-between align-items-center mb-3';
        newSong.innerHTML = `
            <div>
                <p class="song-title mb-0 text-light">${titleInput.value}</p>
                <small class="artist-name text-light">${artistInput.value}</small>
            </div>
            <button class="btn btn-danger btn-sm delete">Delete</button>
        `;

        // Append to song list
        songList.appendChild(newSong);

        // Clear input fields
        titleInput.value = '';
        artistInput.value = '';

        // Attach delete event
        attachDeleteEvent(newSong.querySelector('.delete'));
    });

    // Function to attach delete event
    function attachDeleteEvent(deleteButton) {
        deleteButton.addEventListener('click', () => {
            deleteButton.closest('li').remove();
        });
    }

    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const songs = songList.querySelectorAll('.song');

        songs.forEach(song => {
            const title = song.querySelector('.song-title').textContent.toLowerCase();
            const artist = song.querySelector('.artist-name').textContent.toLowerCase();

            // Check if search term is in title or artist
            if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                song.style.display = '';
            } else {
                song.style.display = 'none';
            }
        });
    });

    // Attach delete events to existing songs
    const existingDeleteButtons = songList.querySelectorAll('.delete');
    existingDeleteButtons.forEach(attachDeleteEvent);
});
