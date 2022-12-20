export const networks = [
  {
    id: 1,
    name: "Polkadot",
    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=023",
    description: "Snapshots for the polkadot network in RocksDb format",
  },
  {
    id: 2,
    name: "Kusama",
    logo: "https://cryptologos.cc/logos/kusama-ksm-logo.svg?v=023",
    description: "Snapshots for the polkadot network in RocksDb format",
  },
  {
    id: 3,
    name: "Rococo",
    logo: "https://polkadot.network/assets/img/logo-rococo-circle.svg?v=198f8dede0",
    description: "Snapshots for the polkadot network in RocksDb format",
  },
  {
    id: 4,
    name: "Flow",
    logo: "https://cryptologos.cc/logos/flow-flow-logo.svg?v=023",
    description: "Snapshots for the polkadot network in RocksDb format",
  },
  {
    id: 5,
    name: "Composable Network",
    logo: "https://assets.website-files.com/600b1c51927516f998803ed6/617852a5343eb21d065a81ce_Composable%20XCVM-min.png",
    description: "Snapshots for the polkadot network in RocksDb format",

  },
  {
    id: 6,
    name: "Dali",
    logo: "https://assets.website-files.com/600b1c51927516f998803ed6/617852a5343eb21d065a81ce_Composable%20XCVM-min.png",
    description: "Snapshots for the polkadot network in RocksDb format",

  },
];
export const NetworksList = [
  {
    
    id: 1,
    network: "Composable",
    details: "Snapashots for the composable networks in RocksDb format",
    link: "https://composable-node-sync.s3.eu-west-1.amazonaws.com/composable/",
    slug: "composable-data-store",
    cloud_query: {
      name: "Composable",
      runtime_size: "0.672 MB (704,321 bytes)",
      archive_size: "",
      compressed: "Yes, 81.03%",
      reserved_meta: "OK - [6D, 65, 74, 61]",
      metadata_version: "V14",
      core_version: "composable-1000 (composable-2.tx1.au1)",
      system_setcode_hash:
        "0x144cefcf0228da1ba1e4018a23fb29fdc0fd4ade495006fa4e3a1930b342e7e4",
      authorize_upgrade_hash:
        "0xdfb6725e1fa2c429146451bf4e367bc3e4da7191f6f1ee689315277076aedf03",
      blake2_256_hash:
        "0xad9a40dbf511bd243d62237b3d67aeba1f44f26c7ecfd5916b38798d3f062a77",
      ipfs: "https://www.ipfs.io/ipfs/QmafupWKKuGKhkTysJq9k3oofzkFUtnwhbv57sSwZMwDpf",
    },
  },
  {
    id: 2,
    network: "picasso(RocksDB)",
    details: "Snapashots for the picasso networks in RocksDb format",
    link: "https://composable-node-sync.s3.eu-west-1.amazonaws.com/picasso/",
    slug: "picasso-data-store",

    cloud_query: {
      name: "Picasso",
      runtime_size: "0.806 MB (844,857 bytes) ",
      archive_size: "",
      compressed: "Yes, 80.43% ",
      reserved_meta: "OK - [6D, 65, 74, 61]",
      metadata_version: "V14",
      core_version: "picasso-1100 (picasso-1.tx1.au1)",
      system_setcode_hash:
        "0x0b332be400896397a237781f35cf2f18906414d8993bdcc30886560281c3f8bc",
      authorize_upgrade_hash:
        " 0xc7902979919a7bb1346e7892a61da860e7a8dee47ebcda1ba6cfaeea506a6a2e",
      blake2_256_hash:
        "0x016774a66c2d7612ac019b063797ad315bf514c4fde11637375d4492993cb360",
      ipfs: "https://www.ipfs.io/ipfs/QmZqj4saLBa5gvUzfaLgKaP4uFrkZnf9jcgbFa79rTuXbV",
    },
  },
  {
    id: 3,
    network: "Dali(RocksDB)",
    details: "Snapashots for the Dali networks in RocksDb format",
    link: "https://composable-node-sync.s3.eu-west-1.amazonaws.com/dali-rococo/",
    slug: "dali-rococo-data-store",
    cloud_query: {
      name: "Dali",
      runtime_size: "1.001 MB (1,049,312 bytes)",
      archive_size: "",
      compressed: "Yes, 79.81% ",
      reserved_meta: "OK - [6D, 65, 74, 61] ",
      metadata_version: "V14",
      core_version: "dali-2100 (dali-1.tx1.au1) ",
      system_setcode_hash:
        "0x8b8ff94f35ac77ab22464fca7f94d88ce25634b02ebb22764650ff94ff91dbcf",
      authorize_upgrade_hash:
        "0xe69c92eef3e8193cdb00a39552cab14a1961144944ac3a1173f9e15e9f944bbb ",
      blake2_256_hash:
        "0x79f3f39ef77ade624e14fb4eb6a6feb95298e1f5122b6eb41c2c8dde820a16bf",
      ipfs: "https://www.ipfs.io/ipfs/QmVjNBK5mWfZ9Hy7a2p8h7eCSd1qB4tACfvHDwUJwWGsMS",
    },
  },
  {
    id: 4,
    network: "Polkadot(RocksDB)",
    details: "Snapashots for the Dali networks in RocksDb format",
    link: "https://s3.eu-west-1.amazonaws.com/data.blockops.network/polkadot/",
    slug: "dali-rococo-data-store",
    cloud_query: {
      name: "Dali",
      runtime_size: "1.001 MB (1,049,312 bytes)",
      archive_size: "",
      compressed: "Yes, 79.81% ",
      reserved_meta: "OK - [6D, 65, 74, 61] ",
      metadata_version: "V14",
      core_version: "dali-2100 (dali-1.tx1.au1) ",
      system_setcode_hash:
        "0x8b8ff94f35ac77ab22464fca7f94d88ce25634b02ebb22764650ff94ff91dbcf",
      authorize_upgrade_hash:
        "0xe69c92eef3e8193cdb00a39552cab14a1961144944ac3a1173f9e15e9f944bbb ",
      blake2_256_hash:
        "0x79f3f39ef77ade624e14fb4eb6a6feb95298e1f5122b6eb41c2c8dde820a16bf",
      ipfs: "https://www.ipfs.io/ipfs/QmVjNBK5mWfZ9Hy7a2p8h7eCSd1qB4tACfvHDwUJwWGsMS",
    },
  },
  {
    id: 5,
    network: "Kusama(RocksDB)",
    details: "Snapashots for the Dali networks in RocksDb format",
    link: "https://s3.eu-west-1.amazonaws.com/data.blockops.network/kusama/",
    slug: "dali-rococo-data-store",
    cloud_query: {
      name: "Dali",
      runtime_size: "1.001 MB (1,049,312 bytes)",
      archive_size: "",
      compressed: "Yes, 79.81% ",
      reserved_meta: "OK - [6D, 65, 74, 61] ",
      metadata_version: "V14",
      core_version: "dali-2100 (dali-1.tx1.au1) ",
      system_setcode_hash:
        "0x8b8ff94f35ac77ab22464fca7f94d88ce25634b02ebb22764650ff94ff91dbcf",
      authorize_upgrade_hash:
        "0xe69c92eef3e8193cdb00a39552cab14a1961144944ac3a1173f9e15e9f944bbb ",
      blake2_256_hash:
        "0x79f3f39ef77ade624e14fb4eb6a6feb95298e1f5122b6eb41c2c8dde820a16bf",
      ipfs: "https://www.ipfs.io/ipfs/QmVjNBK5mWfZ9Hy7a2p8h7eCSd1qB4tACfvHDwUJwWGsMS",
    },
  },
  {
    id: 6,
    network: "Rococo(RocksDB)",
    details: "Snapashots for the Dali networks in RocksDb format",
    link: "https://composable-node-sync.s3.eu-west-1.amazonaws.com/dali-rococo/",
    slug: "dali-rococo-data-store",
    cloud_query: {
      name: "Dali",
      runtime_size: "1.001 MB (1,049,312 bytes)",
      archive_size: "",
      compressed: "Yes, 79.81% ",
      reserved_meta: "OK - [6D, 65, 74, 61] ",
      metadata_version: "V14",
      core_version: "dali-2100 (dali-1.tx1.au1) ",
      system_setcode_hash:
        "0x8b8ff94f35ac77ab22464fca7f94d88ce25634b02ebb22764650ff94ff91dbcf",
      authorize_upgrade_hash:
        "0xe69c92eef3e8193cdb00a39552cab14a1961144944ac3a1173f9e15e9f944bbb ",
      blake2_256_hash:
        "0x79f3f39ef77ade624e14fb4eb6a6feb95298e1f5122b6eb41c2c8dde820a16bf",
      ipfs: "https://www.ipfs.io/ipfs/QmVjNBK5mWfZ9Hy7a2p8h7eCSd1qB4tACfvHDwUJwWGsMS",
    },
  },
  {
    id: 7,
    network: "Moonbeam(RocksDB)",
    details: "Snapashots for the Dali networks in RocksDb format",
    link: "https://composable-node-sync.s3.eu-west-1.amazonaws.com/dali-rococo/",
    slug: "dali-rococo-data-store",
    cloud_query: {
      name: "Dali",
      runtime_size: "1.001 MB (1,049,312 bytes)",
      archive_size: "",
      compressed: "Yes, 79.81% ",
      reserved_meta: "OK - [6D, 65, 74, 61] ",
      metadata_version: "V14",
      core_version: "dali-2100 (dali-1.tx1.au1) ",
      system_setcode_hash:
        "0x8b8ff94f35ac77ab22464fca7f94d88ce25634b02ebb22764650ff94ff91dbcf",
      authorize_upgrade_hash:
        "0xe69c92eef3e8193cdb00a39552cab14a1961144944ac3a1173f9e15e9f944bbb ",
      blake2_256_hash:
        "0x79f3f39ef77ade624e14fb4eb6a6feb95298e1f5122b6eb41c2c8dde820a16bf",
      ipfs: "https://www.ipfs.io/ipfs/QmVjNBK5mWfZ9Hy7a2p8h7eCSd1qB4tACfvHDwUJwWGsMS",
    },
  },
  {
    id: 8,
    network: "Moonriver(RocksDB)",
    details: "Snapashots for the Dali networks in RocksDb format",
    link: "https://composable-node-sync.s3.eu-west-1.amazonaws.com/dali-rococo/",
    slug: "dali-rococo-data-store",
    cloud_query: {
      name: "Dali",
      runtime_size: "1.001 MB (1,049,312 bytes)",
      archive_size: "",
      compressed: "Yes, 79.81% ",
      reserved_meta: "OK - [6D, 65, 74, 61] ",
      metadata_version: "V14",
      core_version: "dali-2100 (dali-1.tx1.au1) ",
      system_setcode_hash:
        "0x8b8ff94f35ac77ab22464fca7f94d88ce25634b02ebb22764650ff94ff91dbcf",
      authorize_upgrade_hash:
        "0xe69c92eef3e8193cdb00a39552cab14a1961144944ac3a1173f9e15e9f944bbb ",
      blake2_256_hash:
        "0x79f3f39ef77ade624e14fb4eb6a6feb95298e1f5122b6eb41c2c8dde820a16bf",
      ipfs: "https://www.ipfs.io/ipfs/QmVjNBK5mWfZ9Hy7a2p8h7eCSd1qB4tACfvHDwUJwWGsMS",
    },
  },
  {
    id: 9,
    network: "Astar(RocksDB)",
    details: "Snapashots for the Dali networks in RocksDb format",
    link: "https://composable-node-sync.s3.eu-west-1.amazonaws.com/dali-rococo/",
    slug: "dali-rococo-data-store",
    cloud_query: {
      name: "Dali",
      runtime_size: "1.001 MB (1,049,312 bytes)",
      archive_size: "",
      compressed: "Yes, 79.81% ",
      reserved_meta: "OK - [6D, 65, 74, 61] ",
      metadata_version: "V14",
      core_version: "dali-2100 (dali-1.tx1.au1) ",
      system_setcode_hash:
        "0x8b8ff94f35ac77ab22464fca7f94d88ce25634b02ebb22764650ff94ff91dbcf",
      authorize_upgrade_hash:
        "0xe69c92eef3e8193cdb00a39552cab14a1961144944ac3a1173f9e15e9f944bbb ",
      blake2_256_hash:
        "0x79f3f39ef77ade624e14fb4eb6a6feb95298e1f5122b6eb41c2c8dde820a16bf",
      ipfs: "https://www.ipfs.io/ipfs/QmVjNBK5mWfZ9Hy7a2p8h7eCSd1qB4tACfvHDwUJwWGsMS",
    },
  },
  {
    id: 10,
    network: "Subspace(RocksDB)",
    details: "Snapashots for the Dali networks in RocksDb format",
    link: "https://composable-node-sync.s3.eu-west-1.amazonaws.com/dali-rococo/",
    slug: "dali-rococo-data-store",
    cloud_query: {
      name: "Dali",
      runtime_size: "1.001 MB (1,049,312 bytes)",
      archive_size: "",
      compressed: "Yes, 79.81% ",
      reserved_meta: "OK - [6D, 65, 74, 61] ",
      metadata_version: "V14",
      core_version: "dali-2100 (dali-1.tx1.au1) ",
      system_setcode_hash:
        "0x8b8ff94f35ac77ab22464fca7f94d88ce25634b02ebb22764650ff94ff91dbcf",
      authorize_upgrade_hash:
        "0xe69c92eef3e8193cdb00a39552cab14a1961144944ac3a1173f9e15e9f944bbb ",
      blake2_256_hash:
        "0x79f3f39ef77ade624e14fb4eb6a6feb95298e1f5122b6eb41c2c8dde820a16bf",
      ipfs: "https://www.ipfs.io/ipfs/QmVjNBK5mWfZ9Hy7a2p8h7eCSd1qB4tACfvHDwUJwWGsMS",
    },
  },
];