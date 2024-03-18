from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User


class CustomUserSerializer(serializers.ModelSerializer):
    password_confirmation = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'password_confirmation')
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        password = data.get('password')
        password_confirmation = data.pop('password_confirmation', None)

        if password != password_confirmation:
            raise serializers.ValidationError("Passwords do not match.")

        return data

    def create(self, validated_data):
        validated_data.pop('password_confirmation', None)
        user = User.objects.create_user(**validated_data)
        return user


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['access'] = str(refresh.access_token)
        data['refresh'] = str(refresh)
        return {'success': True, 'tokens': data}
