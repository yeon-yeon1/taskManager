import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const today = new Date();
  const date = today.getDate();
  const day = today.getDay(); // 0 (Sun) to 6 (Sat)

  const days = ["S", "M", "Tu", "W", "Th", "F", "S"];

  return (
    <div style={{ padding: "20px", backgroundColor: "#e3f2fd", height: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>📅 Today 📅</h2>

      {/* 달력 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
          maxWidth: "400px",
          margin: "0 auto",
          backgroundColor: "#e1f5fe",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {days.map((d, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: i === 0 ? "#f06292" : i === 6 ? "#3949ab" : "#333",
            }}
          >
            {d}
          </div>
        ))}

        {Array.from({ length: 35 }, (_, i) => {
          const cellDate = i + 1;
          return (
            <div
              key={i}
              style={{
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {cellDate === date ? (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "3px solid red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  {cellDate}
                </div>
              ) : (
                <span>{cellDate <= 31 ? cellDate : ""}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* 버튼 */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          onClick={() => navigate("/planner")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f48fb1",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          플래너 작성하기
        </button>
        <button
          onClick={() => navigate("/list")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ce93d8",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          플래너 모아보기
        </button>
      </div>
    </div>
  );
}

export default HomePage;
