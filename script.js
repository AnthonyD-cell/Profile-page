function showSection(section) {
    const network = document.getElementById('network-content');
    const systemdev = document.getElementById('systemdev-content');
    const btnNetwork = document.getElementById('network-btn');
    const btnSystem = document.getElementById('systemdev-btn');

    network.style.display = 'none';
    systemdev.style.display = 'none';
    btnNetwork.classList.remove('active');
    btnSystem.classList.remove('active');

    if (section === 'network') {
        network.style.display = 'block';
        btnNetwork.classList.add('active');
    } else {
        systemdev.style.display = 'block';
        btnSystem.classList.add('active');
    }
}
window.onload = () => showSection('network');
