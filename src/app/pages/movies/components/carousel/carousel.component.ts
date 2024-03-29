import {Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import { AppApiService } from '../../services/app-api.service';
import { CarouselData } from '../../types/carousel-data.interface';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  scrollValue: number = 0;
  scrollStep: number = 120;
  carouselMovies: CarouselData[] = [];

  @ViewChild('carouselContent') carouselContent!:ElementRef<HTMLDivElement>;
  @ViewChild('filmCarousel') container!:ElementRef<HTMLDivElement>;

  constructor(private apiService: AppApiService) {}

  async ngOnInit() {
    this.carouselMovies = await this.getCarouselData();

  }

  async getCarouselData(): Promise<CarouselData[]> {
    try {
      return await this.apiService.loadCarousel();
    } catch (error) {
      console.error('Error loading carousel data:', error);
      return [];
    }
  }

  scrollToPrevious() {
    this.scrollValue -= this.scrollStep;
    if (this.scrollValue < 0) this.scrollValue = this.getCarouselContentWidth() - this.getCarouselContainerWidth();
    this.scrollToValue(this.scrollValue);
  }

  scrollToNext() {
    this.scrollValue += this.scrollStep;
    if (this.scrollValue > this.getCarouselContentWidth() - this.getCarouselContainerWidth()) this.scrollValue = 0;
    this.scrollToValue(this.scrollValue);
  }

  openYouTubeLink(title: string) {
    window.open(
      `https://www.youtube.com/results?search_query=%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D0%B5%D1%80+${title}`,
      '_blank'
    );
  }

  scrollToValue(value: number) {
    this.carouselContent.nativeElement.scrollTo({ left: value, behavior: 'smooth' });
  }

  getCarouselContentWidth(): number {
    return this.carouselContent.nativeElement.scrollWidth;
  }

  getCarouselContainerWidth(): number {
    return this.container.nativeElement.clientWidth;
  }
}
