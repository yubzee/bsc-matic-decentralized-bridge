# bsc-matic-decentralized-bridge
A decentralized bridge for transfering nft assets between binance and polygon chains


When the user initiates a transfer from the bsc chain, he first of all has to create a message that can be signed using his address, the address of the recipient,the nft tokenID and a nonce to
prevent double transfer.

The message is the hashed and we create a signature using the user's private key.

Everything get sent to the bridge contract which eventually emits an event with the parameters of the transfer.

the Matic blockchain contract verifies the signature and mint nft's accordingly.

the NFt tokens of the bsc chain get burned too accordingly.
