import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function News() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      console.log("1秒后打印");
      navigate("/home/messages");
    }, 1000);
  }, []);

  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  );
}