function storiesaddkaroaurdekho(){

   var stories = [
        {dp:"https://e0.pxfuel.com/wallpapers/253/399/desktop-wallpaper-untitled-car-smartphone-laptop-beautiful-3d-cars-thumbnail.jpg",
        status:"https://e0.pxfuel.com/wallpapers/253/399/desktop-wallpaper-untitled-car-smartphone-laptop-beautiful-3d-cars-thumbnail.jpg"},
        {dp:"https://cdn.gencraft.com/prod/user/c1b73e63-bc2c-4c22-b88b-1d5533f3dad7/c4c27c8d-3fdb-4472-a737-e7bcabebd288/image/image1_0.jpg?Expires=1717200077&Signature=X6tToZhbYLPcxQkfzjQPFFIBZrhkQIUWW7US-5W6YG3lgQsB4jjWJor~1dyJ6ViXJwDJvGELI5OTPtZQh4LC47pkB5mjP3W1TKGzSg5TawT5Wb1US0U3E3SXk55bB0EcWj2x-wdDViBvrZlcltEWNvFml2OZyYmKVkOeK~hIPVlrxmK0i4Is1rQwEFbQNd60ehsed55Ag1Ii1mcj2LtzluYwwSfwBu4jk4X2nqZnwzfiPf3lfUdbwEEAcpO0tCEUxxsf5u1DwjGJvFiZRN0ONbULODCsyodyHdd0nmFU3ty37XDkySYX0EU~-LhSXoSVvU0HCAQVUnVbFj85FSTVng__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/c1b73e63-bc2c-4c22-b88b-1d5533f3dad7/c4c27c8d-3fdb-4472-a737-e7bcabebd288/image/image1_0.jpg?Expires=1717200077&Signature=X6tToZhbYLPcxQkfzjQPFFIBZrhkQIUWW7US-5W6YG3lgQsB4jjWJor~1dyJ6ViXJwDJvGELI5OTPtZQh4LC47pkB5mjP3W1TKGzSg5TawT5Wb1US0U3E3SXk55bB0EcWj2x-wdDViBvrZlcltEWNvFml2OZyYmKVkOeK~hIPVlrxmK0i4Is1rQwEFbQNd60ehsed55Ag1Ii1mcj2LtzluYwwSfwBu4jk4X2nqZnwzfiPf3lfUdbwEEAcpO0tCEUxxsf5u1DwjGJvFiZRN0ONbULODCsyodyHdd0nmFU3ty37XDkySYX0EU~-LhSXoSVvU0HCAQVUnVbFj85FSTVng__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/d8d28bc5-77fc-457a-a5ab-fdc84ba16eae/3aabdb7f-4f54-4bd9-8649-1ddb4c9b90ae/image/image0_0.jpg?Expires=1717200077&Signature=Za2VWMA6LvcndjfIci5hRRUdIMZgZNuTGcm4gD~TLCem7u5w~T~vpQADNi3zGOx5NujPYITcp4bZFmZ~k5ZDmKRD0Leva6UHjP0U5owXZEnEmS5i7cj7c1ajKduYpd4M6ULUDDZBmcdstbrrd--Vs~sKu2Vu-u0msPNRJ~Xd1x7EtPLVJRnD9h3cI0Dpf3AB4BIZxMf0TPU4dzWffBVhfNrvLaUT~nrNXLWwrc--kTLQMcxwMKvhC47mg38FZhIilDNIPKAK0zG-JAWwgdfglaJ2r9w~dJr4iHYyGhEijyrcVBGdpxbY2MSqfbvCCBDGZNvCuEyEOCYk1bKfjh7NmQ__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/d8d28bc5-77fc-457a-a5ab-fdc84ba16eae/3aabdb7f-4f54-4bd9-8649-1ddb4c9b90ae/image/image0_0.jpg?Expires=1717200077&Signature=Za2VWMA6LvcndjfIci5hRRUdIMZgZNuTGcm4gD~TLCem7u5w~T~vpQADNi3zGOx5NujPYITcp4bZFmZ~k5ZDmKRD0Leva6UHjP0U5owXZEnEmS5i7cj7c1ajKduYpd4M6ULUDDZBmcdstbrrd--Vs~sKu2Vu-u0msPNRJ~Xd1x7EtPLVJRnD9h3cI0Dpf3AB4BIZxMf0TPU4dzWffBVhfNrvLaUT~nrNXLWwrc--kTLQMcxwMKvhC47mg38FZhIilDNIPKAK0zG-JAWwgdfglaJ2r9w~dJr4iHYyGhEijyrcVBGdpxbY2MSqfbvCCBDGZNvCuEyEOCYk1bKfjh7NmQ__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/82aab44f-50df-4e0d-8463-a3f672cab6ac/f197b189-2c64-4ac0-bd7e-22c28e6a1f29/image/image1_0.jpg?Expires=1709536671&Signature=DuVjiEpg3h1jnPdVOrH6IjYmG7jy05Z5e1vDPfjYkMVA0Qk6HozlbLk5L3inQaMjDggU9BNnVLI0TYOL9Lm6MkBCk5xirsAtLGX6VihXnKAkO5pSv~LOLbmX18s4~se0RWHwHwbzbhWDhzCyIVrkxLEtcmsvOXucMLPThlOxwLQjNYl36mX6B8zBWiyN5PqBd38YQTizEQdSK3mfMgXiqHlRjFRbac1eN40DImAeFmud~XGlDNO-E3PKSm6cUV2bQ3e06vRjcGKwNmImktqnNZJ-w7vizLxH0CDEBkcQ0lHAu6y3pXZdsLfN1aBUpPIrFAwkCeFkr2ExbDxlSrGUIA__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/82aab44f-50df-4e0d-8463-a3f672cab6ac/f197b189-2c64-4ac0-bd7e-22c28e6a1f29/image/image1_0.jpg?Expires=1709536671&Signature=DuVjiEpg3h1jnPdVOrH6IjYmG7jy05Z5e1vDPfjYkMVA0Qk6HozlbLk5L3inQaMjDggU9BNnVLI0TYOL9Lm6MkBCk5xirsAtLGX6VihXnKAkO5pSv~LOLbmX18s4~se0RWHwHwbzbhWDhzCyIVrkxLEtcmsvOXucMLPThlOxwLQjNYl36mX6B8zBWiyN5PqBd38YQTizEQdSK3mfMgXiqHlRjFRbac1eN40DImAeFmud~XGlDNO-E3PKSm6cUV2bQ3e06vRjcGKwNmImktqnNZJ-w7vizLxH0CDEBkcQ0lHAu6y3pXZdsLfN1aBUpPIrFAwkCeFkr2ExbDxlSrGUIA__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/ba0b4f24-a602-4b48-bc22-485e19a25dd5/c71ea8e5-bb09-4e2f-968e-a6bf77ff6cd9/images/image0_0.jpg?Expires=1717200077&Signature=FIrMwuBVA~EnZU~K~nKMZBy1Y2DO2aTOnN7mLAPtIGa05astpM4uJ8YSQgLuB583DfwBAtIYY3dDnEdiUQy0~MQ1ED3Md8MFctBfAC4bYkQSCByT5gUUaPBLb42xsm8~vxeblJAas7~udYiELOC5fIzFgJdVagIhA2SQnzjavgTHTzPRefr~tWf3muuUedccMQgFrNEXmkFawznBgDjFhF0l5C92I7IN1G15essYvEoc16XWG00pN5GgS89EKDtZ7gVpjauBNIGuhYduQX6w7UAMoJJttXJaAOT8w7aKJUvWc~UM68XEYy2lZDNTY2OsKqFEA6Gv6gMM6F7XUZcnOQ__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/ba0b4f24-a602-4b48-bc22-485e19a25dd5/c71ea8e5-bb09-4e2f-968e-a6bf77ff6cd9/images/image0_0.jpg?Expires=1717200077&Signature=FIrMwuBVA~EnZU~K~nKMZBy1Y2DO2aTOnN7mLAPtIGa05astpM4uJ8YSQgLuB583DfwBAtIYY3dDnEdiUQy0~MQ1ED3Md8MFctBfAC4bYkQSCByT5gUUaPBLb42xsm8~vxeblJAas7~udYiELOC5fIzFgJdVagIhA2SQnzjavgTHTzPRefr~tWf3muuUedccMQgFrNEXmkFawznBgDjFhF0l5C92I7IN1G15essYvEoc16XWG00pN5GgS89EKDtZ7gVpjauBNIGuhYduQX6w7UAMoJJttXJaAOT8w7aKJUvWc~UM68XEYy2lZDNTY2OsKqFEA6Gv6gMM6F7XUZcnOQ__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/72a88174-174b-4c01-81ee-549c60d40e93/601997ec-5f67-4b4b-93f5-c208849ac70f/images/image1_0.jpg?Expires=1717200077&Signature=W~mAyeqiCGLC560ERpVzU3xmJ2Ue317mhxT2vytXajGgypQLE19AHCQnZFcKh5gvw4AR9WZI63BPv4xbWGUNax8gGkdY7jvGCQFcv0LLr20Z8SMemzaVUNU~PuMGZdpgFN2U~iNNNEuywprq9jKG1Q8mEgeCt1le~WEGm~kOrFyeomg9vIN-8UKfGgTG24~y0BfzkCCS2m5PWz-7Y3tFXNFn5ZK4vMEq1qa2rME~oVfbCPH3MOrhw-FYD9Xo-gGZmsvDGTc~lrcSMoKtA7QPBkVSseBp-ACxmDBsq9zBAJqKJVJOEFslGwikkBJUM7yZA~gP9d1cqIjvs1ePdrNPNg__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/72a88174-174b-4c01-81ee-549c60d40e93/601997ec-5f67-4b4b-93f5-c208849ac70f/images/image1_0.jpg?Expires=1717200077&Signature=W~mAyeqiCGLC560ERpVzU3xmJ2Ue317mhxT2vytXajGgypQLE19AHCQnZFcKh5gvw4AR9WZI63BPv4xbWGUNax8gGkdY7jvGCQFcv0LLr20Z8SMemzaVUNU~PuMGZdpgFN2U~iNNNEuywprq9jKG1Q8mEgeCt1le~WEGm~kOrFyeomg9vIN-8UKfGgTG24~y0BfzkCCS2m5PWz-7Y3tFXNFn5ZK4vMEq1qa2rME~oVfbCPH3MOrhw-FYD9Xo-gGZmsvDGTc~lrcSMoKtA7QPBkVSseBp-ACxmDBsq9zBAJqKJVJOEFslGwikkBJUM7yZA~gP9d1cqIjvs1ePdrNPNg__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/f4c4371b-4899-444a-bc66-9b1d926255b3/6e6611ec-41ea-4584-aa36-58781ed111eb/images/image1_0.jpg?Expires=1717200077&Signature=cIHYsswVuN1xYF5I4~YEBZ0UlrdZK8kTQew4UXWJv~f4Bd5vGVvHAFWYQ2xuR-AlXVeUFuQd4pHr-AX9kKeRMsZb--sq-GMy4V1eRRtKO6Zwb~g16Z-Ri2aUSCbrJpmYNAnswQXfefuiQh3tH9i0s3z2mVT0SoP8L0j7paJiC7BurbyT03xDinVb0Yyjlvkx3GnBh2wbsaxO2CissWuaBxGiF1PB0cY0GmJqnqosnE5gBBWyp7MdJF2GAtiEQHwqWw89gto-u4HthnNSQeXV5WpSobW9UsdEkzTSyuEav09XwsmTcchlfKa53LNW~gmPkA1eNLzHfFyo7ZEL2mDhQg__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/f4c4371b-4899-444a-bc66-9b1d926255b3/6e6611ec-41ea-4584-aa36-58781ed111eb/images/image1_0.jpg?Expires=1717200077&Signature=cIHYsswVuN1xYF5I4~YEBZ0UlrdZK8kTQew4UXWJv~f4Bd5vGVvHAFWYQ2xuR-AlXVeUFuQd4pHr-AX9kKeRMsZb--sq-GMy4V1eRRtKO6Zwb~g16Z-Ri2aUSCbrJpmYNAnswQXfefuiQh3tH9i0s3z2mVT0SoP8L0j7paJiC7BurbyT03xDinVb0Yyjlvkx3GnBh2wbsaxO2CissWuaBxGiF1PB0cY0GmJqnqosnE5gBBWyp7MdJF2GAtiEQHwqWw89gto-u4HthnNSQeXV5WpSobW9UsdEkzTSyuEav09XwsmTcchlfKa53LNW~gmPkA1eNLzHfFyo7ZEL2mDhQg__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/58025659-5959-4f05-afb9-2514bace4966/fae033e2-2a07-4a41-b6a4-5c2013215cb4/images/image0_0.jpg?Expires=1717200077&Signature=AF6~Ygn42-kRG3UIzRZ08oWqmFIZCiXrwUrD5052pL9irccc9sMP6DTOCG-ty9F7HOkvZ6wFi~GNTVzeVeUuempoFcGu6AIe0gGkfIHiqWUIUFbz9r4J84qo1nzkBVgswe6o3RtRLEuWACQ23oy2oPNMq7Cvykk91W5j~RxmFaYBbtJYDd~dJuzQB4utec2v~0zOWGCTAnD3vr9ArZG24G3r3d2i199gxiykEDVzNb2GvIs2D175CGkz0RSoooP5-ah6QXLWmd3OnxhjdIQwkBMlmHhYc0lDzCciI-GZIpJZGu3Y6CSGDDCsFSkQ5hN0Kk~JCs4jfqSIZYsWQKdL0Q__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/58025659-5959-4f05-afb9-2514bace4966/fae033e2-2a07-4a41-b6a4-5c2013215cb4/images/image0_0.jpg?Expires=1717200077&Signature=AF6~Ygn42-kRG3UIzRZ08oWqmFIZCiXrwUrD5052pL9irccc9sMP6DTOCG-ty9F7HOkvZ6wFi~GNTVzeVeUuempoFcGu6AIe0gGkfIHiqWUIUFbz9r4J84qo1nzkBVgswe6o3RtRLEuWACQ23oy2oPNMq7Cvykk91W5j~RxmFaYBbtJYDd~dJuzQB4utec2v~0zOWGCTAnD3vr9ArZG24G3r3d2i199gxiykEDVzNb2GvIs2D175CGkz0RSoooP5-ah6QXLWmd3OnxhjdIQwkBMlmHhYc0lDzCciI-GZIpJZGu3Y6CSGDDCsFSkQ5hN0Kk~JCs4jfqSIZYsWQKdL0Q__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/0a1b50d1-b788-4db0-bb08-1a7c3d6df708/37769043-7554-4252-88ee-186ea92fdc49/images/image1_0.jpg?Expires=1717200077&Signature=ahaGqnt3BUlNqDFgnZ5BFWlwPM5YPbKSBRRHchwaTawYJU~vu-wmaX6mrEVSoVK21qelHLUrPBH4Y0Zt9OzqLADrUo0ohzXmj0x44bnMQb0xynUTjmw2ylumpe6OOJSZnoioCRc7PktAZ1hT483Pmbbx1cAhxrBAnZUAQAQtdlHlRW64TL7foea5tpw3GCX~5Dej1tLQvmqLDKzdTqMpxGPkkQAAGhcWs3e55pU1geaPj7pn4YD~FJwK~In78ALM-JY466kNPYBmmXWpJNjdlFtlDtwjCUiwoqPA0K5x34i~lezbqERWCFwzVSujsXYRZrZiMosyCrXWjd0V7GCReQ__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/0a1b50d1-b788-4db0-bb08-1a7c3d6df708/37769043-7554-4252-88ee-186ea92fdc49/images/image1_0.jpg?Expires=1717200077&Signature=ahaGqnt3BUlNqDFgnZ5BFWlwPM5YPbKSBRRHchwaTawYJU~vu-wmaX6mrEVSoVK21qelHLUrPBH4Y0Zt9OzqLADrUo0ohzXmj0x44bnMQb0xynUTjmw2ylumpe6OOJSZnoioCRc7PktAZ1hT483Pmbbx1cAhxrBAnZUAQAQtdlHlRW64TL7foea5tpw3GCX~5Dej1tLQvmqLDKzdTqMpxGPkkQAAGhcWs3e55pU1geaPj7pn4YD~FJwK~In78ALM-JY466kNPYBmmXWpJNjdlFtlDtwjCUiwoqPA0K5x34i~lezbqERWCFwzVSujsXYRZrZiMosyCrXWjd0V7GCReQ__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/d4e50dbb-c33b-41e2-99d9-dcf3fd0e30a8/4d5a06d8-9098-4803-aad2-d10ed84ac144/images/image0_0.jpg?Expires=1717200077&Signature=k4Lu51I7hf1txbjdmAtGo8LWhZeLY0~rCw6tZ0TLsbiNHECEz-yyANhEGS30RVySd7Yl5oijZ03wOyZHf44mJyFIN3dWapiL9pb1Bk4NjMnysDaxa8-dgfgDQvX7yCVlY8XB8rnQ1dwRqlpxj-6lbo90M36qjaV~RFlpoRs7-9rfjBstxN8lZ5S1j~9OzT~oxsztOue6nm1mo9ouMQaWzCVrvEcJJM24vOpcS-R2~BPbKLJqmNN4AWcBSANhi3tumL1pShaveAR9ZaSeh46la1o6jUYWq5n6p6FLfE8jmSkO0dMy7OHdDpesI2q-6X1IPKVZt6ClX1l-iqDo0ajAgg__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/d4e50dbb-c33b-41e2-99d9-dcf3fd0e30a8/4d5a06d8-9098-4803-aad2-d10ed84ac144/images/image0_0.jpg?Expires=1717200077&Signature=k4Lu51I7hf1txbjdmAtGo8LWhZeLY0~rCw6tZ0TLsbiNHECEz-yyANhEGS30RVySd7Yl5oijZ03wOyZHf44mJyFIN3dWapiL9pb1Bk4NjMnysDaxa8-dgfgDQvX7yCVlY8XB8rnQ1dwRqlpxj-6lbo90M36qjaV~RFlpoRs7-9rfjBstxN8lZ5S1j~9OzT~oxsztOue6nm1mo9ouMQaWzCVrvEcJJM24vOpcS-R2~BPbKLJqmNN4AWcBSANhi3tumL1pShaveAR9ZaSeh46la1o6jUYWq5n6p6FLfE8jmSkO0dMy7OHdDpesI2q-6X1IPKVZt6ClX1l-iqDo0ajAgg__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/34b8756f-fa4d-422d-8714-e6874e1ae388/cf0fd0f7-afb0-453a-b66a-4f71546687af/images/image1_0.jpg?Expires=1717200077&Signature=M0FXp1flNN2Xa4TlxYqJzDIXJ1Tzr764laybyVJt4JootAQBvPnKTf4o2wABwse729QvVt8J6h2o9kW6XYHE7mHGSSjaYFd0LikRLXBo2nY1aEAgXcpBhzEj-HjokZFdZWWKG9i6Jke9Vdn5SBoclqR9Zof~raN~gYgrKNdZaSv4V6h6Y6SSpImqy9PuvDXOxZeiiN2ozy7MzkQEpzt1O0SC~lokH~fdzLkZtgMjGe0Yofg6Ia0mNtPqHVjsJUChh061lnZ6AJd5h6p~TSOafDOFhwoaz7YYGtUhnV~eh9khhDQA807PSc0CmkRuNtM1YUTnyJBvtdRMsZYrwptdsg__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/34b8756f-fa4d-422d-8714-e6874e1ae388/cf0fd0f7-afb0-453a-b66a-4f71546687af/images/image1_0.jpg?Expires=1717200077&Signature=M0FXp1flNN2Xa4TlxYqJzDIXJ1Tzr764laybyVJt4JootAQBvPnKTf4o2wABwse729QvVt8J6h2o9kW6XYHE7mHGSSjaYFd0LikRLXBo2nY1aEAgXcpBhzEj-HjokZFdZWWKG9i6Jke9Vdn5SBoclqR9Zof~raN~gYgrKNdZaSv4V6h6Y6SSpImqy9PuvDXOxZeiiN2ozy7MzkQEpzt1O0SC~lokH~fdzLkZtgMjGe0Yofg6Ia0mNtPqHVjsJUChh061lnZ6AJd5h6p~TSOafDOFhwoaz7YYGtUhnV~eh9khhDQA807PSc0CmkRuNtM1YUTnyJBvtdRMsZYrwptdsg__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://cdn.gencraft.com/prod/user/d291dc10-75d8-44bb-b53e-2653e195bcc0/3371624b-066f-4540-a0e2-47b0ae781363/image/image0_0.jpg?Expires=1717200077&Signature=gRzuM0rL3iWPggZqFTCOJS8MHdnZXBXrTGxeMxRa3eQgzSPIqC6llPsu0pzI51wr8C0e-K2H-DX2zReQa0goxyAM6gwA2MslvbtImovzJL6YhV~vC~h-FS4nQpsaxuAnlOhUywqaMOLTe25yK9osMgGZU68i1UgvgL0Fu-YhqR~A2K0baMXhVJglcQNheTyNXXX8jnOphvO3AKSfprRU8dUzPf4yXZoGBtartPpjjau5PmYFAtd3a-8lOkA8YUYkyR9Nslw0Xu6HWMvCymD~LnhoR0lralM-A4sJkA2lB52O~hYvkaW~g60Tpd3a3DZz5hSYoKbdA1R4asAoqLr34w__&Key-Pair-Id=K3RDDB1TZ8BHT8",
        status:"https://cdn.gencraft.com/prod/user/d291dc10-75d8-44bb-b53e-2653e195bcc0/3371624b-066f-4540-a0e2-47b0ae781363/image/image0_0.jpg?Expires=1717200077&Signature=gRzuM0rL3iWPggZqFTCOJS8MHdnZXBXrTGxeMxRa3eQgzSPIqC6llPsu0pzI51wr8C0e-K2H-DX2zReQa0goxyAM6gwA2MslvbtImovzJL6YhV~vC~h-FS4nQpsaxuAnlOhUywqaMOLTe25yK9osMgGZU68i1UgvgL0Fu-YhqR~A2K0baMXhVJglcQNheTyNXXX8jnOphvO3AKSfprRU8dUzPf4yXZoGBtartPpjjau5PmYFAtd3a-8lOkA8YUYkyR9Nslw0Xu6HWMvCymD~LnhoR0lralM-A4sJkA2lB52O~hYvkaW~g60Tpd3a3DZz5hSYoKbdA1R4asAoqLr34w__&Key-Pair-Id=K3RDDB1TZ8BHT8"},
        {dp:"https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
        status:"https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="},
        {dp:"https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {dp:"https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {dp:"https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {dp:"https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status:"https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {dp:"https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {dp:"https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {dp:"https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {dp:"https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=600"}
    ];

    var storiyan = document.querySelector("#storiyan");

    stories.forEach(function(story,index){
        storiyan.innerHTML += `<div class="stories">
        <img id = "${index}" src="${story.dp}" alt="">
        </div>`;
    })

    storiyan.addEventListener("click",function(dets){
        // console.log(dets.target.id);
        // console.log(stories[dets.target.id].status);
        document.querySelector("#cards .viewstory").innerHTML = `<img class="storyimage" src="${stories[dets.target.id].status}" alt=""> <div class="bar"></div>`;
        document.querySelector("#cards .viewstory").style.display = "inline";
        bartimer();

        setTimeout(function(){
            document.querySelector("#cards .viewstory").style.display = "none";
        },3000)
    })

    


}




storiesaddkaroaurdekho();

function bartimer(){
    gsap.to(".bar",{
        width:"0px",
        duration : 3,
    })
}


