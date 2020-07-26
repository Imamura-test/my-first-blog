// require
const Peer = require('skyway-js');
const peer = new Peer({key: 'f9783886-c8b9-4511-9776-d9b5119d763f'});

// import
import Peer from 'skyway-js';
const peer = new Peer({key: 'f9783886-c8b9-4511-9776-d9b5119d763f'});

 //Peer作成
 const peer = new Peer({
    key: 'f9783886-c8b9-4511-9776-d9b5119d763f',
    debug: 3
  });

//PeerID取得
peer.on('open', () => {
    document.getElementById('my-id').textContent = peer.id;
});

//着信処理
peer.on('call', mediaConnection => {
  mediaConnection.answer(localStream);
  setEventListener(mediaConnection);
});

//errorイベント
peer.on('error', err => {
  alert(err.message);
});

//closeイベント
peer.on('error', err => {
  alert(err.message);
});