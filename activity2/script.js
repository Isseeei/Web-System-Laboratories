var btns = document.querySelectorAll('#Songs .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){

        const li = e.target.parentElement;
        li.parentNode.removeChild(li)

    });
});

const addForm = document.forms['adds'];
const songList = document.querySelector('#Songs');

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const songTitle = addForm.querySelector('#song-title').value;
    const artistName = addForm.querySelector('#artist-name').value;
    
    if (songTitle && artistName) {
        const li = document.createElement('li');
        li.classList.add('song', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-3');
        const songDetails = document.createElement('div');
        const songName = document.createElement('p');
        songName.classList.add('song-title', 'mb-0', 'text-light');
        songName.textContent = songTitle;

        const artist = document.createElement('small');
        artist.classList.add('artist-name', 'text-light');
        artist.textContent = ' - ' + artistName;
        
        // Add song title and artist to song details div
        songDetails.appendChild(songName);
        songDetails.appendChild(artist);
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteBtn.textContent = 'Delete';
        
        // Add event listener to delete button
        deleteBtn.addEventListener('click', function() {
            li.remove(); // Remove the song from the list when delete is clicked
        });
        
        // Append song details and delete button to the list item
        li.appendChild(songDetails);
        li.appendChild(deleteBtn);
        
        // Append the new song <li> to the playlist <ul>
        songList.appendChild(li);
        
        // Clear the form inputs after adding the song
        addForm.reset();
    } else {
        alert('Please enter both song title and artist name.');
    }
});

// Get the search input field
const searchBar = document.forms['search-barr'].querySelector('input');

// Add an event listener for when a user types in the search bar
searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase(); // Correct method name
    const songs = document.getElementById('Songs').getElementsByTagName('li'); // Get the list of songs
    
    // Loop through each song
    Array.from(songs).forEach(function(song) {
        const title = song.querySelector('.song-title').textContent; // Get the song title
        // If the song title includes the search term, show it, else hide it
        if (title.toLowerCase().indexOf(term) !== -1) { // Correct method name and comparison
            song.style.display = 'block'; // Show the song
        } else {
            song.style.display = 'none'; // Hide the song
        }
    });
});
