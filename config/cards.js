'use strict';
export const Cards = [
    // ETM-NUM | CARD-NUM | CHIP-NUM | DATE | DESDE? STATUS | BALANCE | AMOUNT |
    // ID 1
    {etmId: 1, numCard: 123456790, numChip: 987654322, dateStar:"2024-01-02", status: false,    balance: 1100, amount: 210},
    {etmId: 1, numCard: 123456791, numChip: 987654323, dateStar:"2024-01-03", status: true,     balance: 1200, amount: 220},
    {etmId: 1, numCard: 123456792, numChip: 987654324, dateStar:"2024-01-04", status: true,     balance: 1300, amount: 230},
    {etmId: 1, numCard: 123456793, numChip: 987654325, dateStar:"2024-01-05", status: false,    balance: 1400, amount: 240},
    {etmId: 1, numCard: 123456784, numChip: 998765436, dateStar:"2023-10-05", status: false,    balance: 5900, amount: 1140},
    {etmId: 1, numCard: 123456785, numChip: 998765437, dateStar:"2023-10-06", status: true,     balance: 6000, amount: 1150},
    {etmId: 1, numCard: 123456786, numChip: 998765438, dateStar:"2023-10-07", status: false,    balance: 6100, amount: 1160},
    {etmId: 1, numCard: 123456787, numChip: 998765439, dateStar:"2023-10-08", status: true,     balance: 6200, amount: 1170},
    // ID 2
    {etmId: 2, numCard: 234567890, numChip: 876543210, dateStar:"2024-02-01", status: false,    balance: 1500, amount: 300},
    {etmId: 2, numCard: 234567891, numChip: 876543211, dateStar:"2024-02-02", status: true,     balance: 1600, amount: 310},
    {etmId: 2, numCard: 234567892, numChip: 876543212, dateStar:"2024-02-03", status: false,    balance: 1700, amount: 320},
    {etmId: 2, numCard: 234567893, numChip: 876543213, dateStar:"2024-02-04", status: true,     balance: 1800, amount: 330},
    {etmId: 2, numCard: 234567894, numChip: 876543214, dateStar:"2024-02-05", status: true,     balance: 1900, amount: 340},
    {etmId: 2, numCard: 234567895, numChip: 876543215, dateStar:"2024-02-06", status: false,    balance: 2000, amount: 350},
    {etmId: 2, numCard: 234567896, numChip: 876543216, dateStar:"2024-02-07", status: true,     balance: 2100, amount: 360},
    // ID 3
    {etmId: 3, numCard: 345678901, numChip: 765432109, dateStar:"2024-03-01", status: true,     balance: 2000, amount: 400},
    {etmId: 3, numCard: 345678902, numChip: 765432110, dateStar:"2024-03-02", status: false,    balance: 2100, amount: 410},
    {etmId: 3, numCard: 345678903, numChip: 765432111, dateStar:"2024-03-03", status: true,     balance: 2200, amount: 420},
    {etmId: 3, numCard: 345678904, numChip: 765432112, dateStar:"2024-03-04", status: true,     balance: 2300, amount: 430},
    {etmId: 3, numCard: 345678905, numChip: 765432113, dateStar:"2024-03-05", status: false,    balance: 2400, amount: 440},
    // ID 4
    {etmId: 4, numCard: 456789012, numChip: 654321098, dateStar:"2024-04-01", status: true,     balance: 2500, amount: 500},
    {etmId: 4, numCard: 456789013, numChip: 654321099, dateStar:"2024-04-02", status: false,    balance: 2600, amount: 510},
    {etmId: 4, numCard: 456789014, numChip: 654321100, dateStar:"2024-04-03", status: true,     balance: 2700, amount: 520},
    {etmId: 4, numCard: 456789015, numChip: 654321101, dateStar:"2024-04-04", status: true,     balance: 2800, amount: 530},
    {etmId: 4, numCard: 456789016, numChip: 654321102, dateStar:"2024-04-05", status: false,    balance: 2900, amount: 540},
    // ID 5
    {etmId: 5, numCard: 567890123, numChip: 543210987, dateStar:"2024-05-01", status: false,    balance: 3000, amount: 600},
    {etmId: 5, numCard: 567890124, numChip: 543210988, dateStar:"2024-05-02", status: true,     balance: 3100, amount: 610},
    {etmId: 5, numCard: 567890125, numChip: 543210989, dateStar:"2024-05-03", status: false,    balance: 3200, amount: 620},
    {etmId: 5, numCard: 567890126, numChip: 543210990, dateStar:"2024-05-04", status: true,     balance: 3300, amount: 630},
    {etmId: 5, numCard: 567890127, numChip: 543210991, dateStar:"2024-05-05", status: true,     balance: 3400, amount: 640},
    {etmId: 5, numCard: 567890128, numChip: 543210992, dateStar:"2024-05-06", status: false,    balance: 3500, amount: 650},
    {etmId: 5, numCard: 567890129, numChip: 543210993, dateStar:"2024-05-07", status: true,     balance: 3600, amount: 660},
    // ID 6
    {etmId: 6, numCard: 678901234, numChip: 432109876, dateStar:"2024-06-01", status: true,     balance: 3500, amount: 700},
    {etmId: 6, numCard: 678901235, numChip: 432109877, dateStar:"2024-06-02", status: false,    balance: 3600, amount: 710},
    {etmId: 6, numCard: 678901236, numChip: 432109878, dateStar:"2024-06-03", status: true,     balance: 3700, amount: 720},
    {etmId: 6, numCard: 678901237, numChip: 432109879, dateStar:"2024-06-04", status: true,     balance: 3800, amount: 730},
    {etmId: 6, numCard: 678901238, numChip: 432109880, dateStar:"2024-06-05", status: false,    balance: 3900, amount: 740},
    // ID 7
    {etmId: 7, numCard: 789012345, numChip: 321098765, dateStar:"2023-07-01", status: false,    balance: 4000, amount: 800},
    {etmId: 7, numCard: 789012346, numChip: 321098766, dateStar:"2023-07-02", status: true,     balance: 4100, amount: 810},
    {etmId: 7, numCard: 789012347, numChip: 321098767, dateStar:"2023-07-03", status: false,    balance: 4200, amount: 820},
    {etmId: 7, numCard: 789012348, numChip: 321098768, dateStar:"2023-07-04", status: true,     balance: 4300, amount: 830},
    {etmId: 7, numCard: 789012349, numChip: 321098769, dateStar:"2023-07-05", status: true,     balance: 4400, amount: 840},
];
