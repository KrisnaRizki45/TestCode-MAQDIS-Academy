import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button, Avatar } from "@mui/material";
import { BookOpen, Trophy, Calendar, Play, Clock } from "lucide-react";

// Dummy data hafalan
const hafalanList = [
  { id: 1, title: "Al-Fatihah", days: 7 },
  { id: 2, title: "Al-Baqarah", days: 286 },
  { id: 3, title: "Al-Imran", days: 200 },
  { id: 4, title: "An-Nisa", days: 176 },
  { id: 5, title: "Al-Ma'idah", days: 120 },
  { id: 6, title: "Al-An'am", days: 165 },
];

const Hafalan = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#FFF8E1", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ bgcolor: "#FF9800" }}>
            <BookOpen />
          </Avatar>
          <Typography variant="h5" fontWeight="bold" color="#FF9800">
            Hafalan Al-Qur'an
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="text.secondary">
          Assalamu'alaikum, Selamat Belajar!
        </Typography>
      </Box>

      {/* Progress Stats */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Card sx={{ flex: 1, minWidth: 150, bgcolor: "#FFE0B2" }}>
          <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: "#FF9800" }}>
              <Trophy />
            </Avatar>
            <Box>
              <Typography variant="subtitle2">Hari Aktif</Typography>
              <Typography variant="h6" fontWeight="bold">
                12 Hari
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: 150, bgcolor: "#FFE0B2" }}>
          <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: "#FF9800" }}>
              <Calendar />
            </Avatar>
            <Box>
              <Typography variant="subtitle2">XP</Typography>
              <Typography variant="h6" fontWeight="bold">
                120 XP
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Hafalan Modules */}
      <Grid container spacing={3}>
        {hafalanList.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
                bgcolor: "#FFB74D",
                color: "white",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Total Ayat: {item.days}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#FB8C00",
                    "&:hover": { bgcolor: "#EF6C00" },
                  }}
                  fullWidth
                >
                  Mulai Hafalan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bonus Card */}
      <Box
        sx={{
          mt: 6,
          p: 3,
          borderRadius: 3,
          background: "linear-gradient(135deg, #FF9800, #FB8C00)",
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="subtitle2">Program Maghrib</Typography>
          <Typography variant="h6" fontWeight="bold">
            Makin Betah Baca Al-Qur'an
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ bgcolor: "white", color: "#FB8C00", "&:hover": { bgcolor: "#FFE0B2" } }}
        >
          Daftar Sekarang
        </Button>
      </Box>
    </Box>
  );
};

export default Hafalan;
