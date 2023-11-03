import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './pages/auth/auth.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FeedComponent } from './pages/home-page/components/feed/feed.component.spec';
import { PostComponent } from './pages/home-page/components/post/post.component';
import { TagsComponent } from './pages/home-page/components/tags/TagsComponent';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    FeedComponent,
    PostComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
